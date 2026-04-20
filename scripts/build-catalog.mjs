// Строит каталог из папки Media: копирует изображения в public/catalog/
// и генерирует src/data/catalog.generated.ts.
// Запуск: node scripts/build-catalog.mjs

import { readdir, mkdir, writeFile, rm } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import sharp from "sharp";

const THUMB_SIZE = 600;
const FULL_MAX = 1600;
const THUMB_QUALITY = 78;
const FULL_QUALITY = 82;

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const MEDIA_ROOT = "/Users/hisa/Documents/Clients/skriabin/Media/Материалы для сайта";
const PUBLIC_CATALOG = join(PROJECT_ROOT, "public", "catalog");
const GEN_FILE = join(PROJECT_ROOT, "src", "data", "catalog.generated.ts");
const BASE_PATH = "/td-skriabin-v3";
const PUBLIC_URL_PREFIX = `${BASE_PATH}/catalog`;

const TRANSLIT = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh",
  з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o",
  п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts",
  ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu",
  я: "ya",
};

function slugify(str) {
  return str
    .toLowerCase()
    .split("")
    .map((ch) => TRANSLIT[ch] ?? ch)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

async function listDir(path) {
  try {
    return (await readdir(path, { withFileTypes: true })).sort((a, b) =>
      a.name.localeCompare(b.name, "ru")
    );
  } catch {
    return [];
  }
}

// Нормализует расширение: .JPG -> .jpg, .jpg.webp -> .webp
function normalizeExt(filename) {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".webp")) return ".webp";
  const ext = extname(lower);
  if (ext === ".jpeg") return ".jpg";
  return ext;
}

// Отфильтровать: если есть "base.jpg.webp" — оставить только его (не дублировать с "base.jpg")
function dedupeImages(entries) {
  const byBase = new Map();
  for (const e of entries) {
    const lower = e.name.toLowerCase();
    if (!/\.(jpg|jpeg|png|webp)$/.test(lower)) continue;
    let baseKey = lower.replace(/\.(jpg|jpeg|png|webp)$/i, "");
    if (baseKey.endsWith(".jpg") || baseKey.endsWith(".png")) {
      baseKey = baseKey.slice(0, -4);
    }
    const existing = byBase.get(baseKey);
    const isWebp = lower.endsWith(".webp");
    if (!existing || (isWebp && !existing.isWebp)) {
      byBase.set(baseKey, { name: e.name, isWebp });
    }
  }
  return [...byBase.values()].map((v) => v.name).sort((a, b) =>
    a.localeCompare(b, "ru", { numeric: true })
  );
}

async function optimizeImagesToDest(srcDir, destDir, sourceFiles) {
  const thumbDir = join(destDir, "thumb");
  const fullDir = join(destDir, "full");
  await mkdir(thumbDir, { recursive: true });
  await mkdir(fullDir, { recursive: true });
  const outNames = [];
  for (let i = 0; i < sourceFiles.length; i++) {
    const src = join(srcDir, sourceFiles[i]);
    const base = `${i + 1}.webp`;
    await sharp(src)
      .rotate()
      .resize(THUMB_SIZE, THUMB_SIZE, { fit: "cover", position: "attention" })
      .webp({ quality: THUMB_QUALITY })
      .toFile(join(thumbDir, base));
    await sharp(src)
      .rotate()
      .resize(FULL_MAX, FULL_MAX, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: FULL_QUALITY })
      .toFile(join(fullDir, base));
    outNames.push(base);
  }
  return outNames;
}

function makeUrls(urlPrefix, baseNames) {
  return {
    images: baseNames.map((f) => `${urlPrefix}/full/${f}`),
    thumbnails: baseNames.map((f) => `${urlPrefix}/thumb/${f}`),
  };
}

// =============== ПАРСЕРЫ ===============

const products = [];
const collections = [];

// 1) Скрябин Керамикс: {Категория}/Сортировка N/files
async function parseSkryabin(brandSlug, brandDir) {
  const categories = await listDir(brandDir);
  for (const cat of categories) {
    if (!cat.isDirectory()) continue;
    const catSlug = slugify(cat.name);
    const catPath = join(brandDir, cat.name);
    const sortings = await listDir(catPath);
    for (const sort of sortings) {
      if (!sort.isDirectory()) continue;
      const sortPath = join(catPath, sort.name);
      const entries = await listDir(sortPath);
      const imageNames = dedupeImages(entries.filter((e) => e.isFile()));
      if (imageNames.length === 0) continue;

      const sortMatch = sort.name.match(/(\d+)/);
      const sortNum = sortMatch ? sortMatch[1] : slugify(sort.name);
      const slug = `${brandSlug}-${catSlug}-sortirovka-${sortNum}`;
      const name = `Скрябин Керамикс ${cat.name.toLowerCase()}, сортировка ${sortNum}`;
      const destDir = join(PUBLIC_CATALOG, brandSlug, catSlug, `sortirovka-${sortNum}`);
      const copied = await optimizeImagesToDest(sortPath, destDir, imageNames);
      const urls = makeUrls(
        `${PUBLIC_URL_PREFIX}/${brandSlug}/${catSlug}/sortirovka-${sortNum}`,
        copied
      );
      products.push({
        slug,
        name,
        brandSlug,
        categorySlug: catSlug,
        collectionSlug: null,
        images: urls.images,
        thumbnails: urls.thumbnails,
        sourcePath: `Скрябин Керамикс/${cat.name}/${sort.name}`,
      });
    }
  }
}

// 2) Real Brick: {Категория}/{цветовая папка}/files  ИЛИ  Коллекция Ultima/{Категория}/files
async function parseRealBrick(brandSlug, brandDir) {
  const entries = await listDir(brandDir);
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    if (entry.name === "Коллекция Ultima") {
      // Ultima: каждый JPG в подкатегории = отдельный товар
      collections.push({ slug: "ultima", name: "Ultima", brandSlug });
      const ultimaDir = join(brandDir, entry.name);
      const ultimaCats = await listDir(ultimaDir);
      for (const cat of ultimaCats) {
        if (!cat.isDirectory()) continue;
        const catSlug = slugify(cat.name);
        const catPath = join(ultimaDir, cat.name);
        const files = await listDir(catPath);
        const imageNames = dedupeImages(files.filter((f) => f.isFile()));
        for (const fileName of imageNames) {
          const stem = basename(fileName, extname(fileName)).replace(/\.(jpg|png)$/i, "");
          const artMatch = stem.match(/Ultima\s+([\d.]+)/i);
          const artCode = artMatch ? artMatch[1] : slugify(stem);
          const productSlug = `${brandSlug}-ultima-${catSlug}-${artCode.replace(/\./g, "-")}`;
          const displayName = `Real Brick Ultima ${cat.name.toLowerCase()} ${artCode}`;
          const destDir = join(
            PUBLIC_CATALOG,
            brandSlug,
            "ultima",
            catSlug,
            artCode.replace(/\./g, "-")
          );
          const copied = await optimizeImagesToDest(catPath, destDir, [fileName]);
          const urls = makeUrls(
            `${PUBLIC_URL_PREFIX}/${brandSlug}/ultima/${catSlug}/${artCode.replace(
              /\./g,
              "-"
            )}`,
            copied
          );
          products.push({
            slug: productSlug,
            name: displayName,
            brandSlug,
            categorySlug: catSlug,
            collectionSlug: "ultima",
            images: urls.images,
            thumbnails: urls.thumbnails,
            sourcePath: `Real Brick/Коллекция Ultima/${cat.name}/${fileName}`,
          });
        }
      }
      continue;
    }

    // Обычные категории RealBrick — внутри цветовые подпапки
    const catSlug = slugify(entry.name);
    const catPath = join(brandDir, entry.name);
    const colorDirs = await listDir(catPath);
    for (const color of colorDirs) {
      if (!color.isDirectory()) continue;
      const colorPath = join(catPath, color.name);
      const files = await listDir(colorPath);
      const imageNames = dedupeImages(files.filter((f) => f.isFile()));
      if (imageNames.length === 0) continue;

      const colorSlug = slugify(color.name);
      const slug = `${brandSlug}-${catSlug}-${colorSlug}`;
      const name = `Real Brick ${entry.name.toLowerCase()} — ${color.name}`;
      const destDir = join(PUBLIC_CATALOG, brandSlug, catSlug, colorSlug);
      const copied = await optimizeImagesToDest(colorPath, destDir, imageNames);
      const urls = makeUrls(
        `${PUBLIC_URL_PREFIX}/${brandSlug}/${catSlug}/${colorSlug}`,
        copied
      );
      products.push({
        slug,
        name,
        brandSlug,
        categorySlug: catSlug,
        collectionSlug: null,
        images: urls.images,
        thumbnails: urls.thumbnails,
        sourcePath: `Real Brick/${entry.name}/${color.name}`,
      });
    }
  }
}

// 3) PLINFA: {Линейка Cassia/Iron/Twin}/{Артикул}/files. Категория = "Плитка"
async function parsePlinfa(brandSlug, brandDir) {
  const lines = await listDir(brandDir);
  for (const line of lines) {
    if (!line.isDirectory()) continue;
    const lineMatch = line.name.match(/^Plinfa\s+(\w+)$/i);
    const collectionName = lineMatch ? lineMatch[1] : line.name.replace(/^Plinfa\s+/i, "");
    const collectionSlug = slugify(collectionName);
    if (!collections.find((c) => c.slug === collectionSlug && c.brandSlug === brandSlug)) {
      collections.push({ slug: collectionSlug, name: collectionName, brandSlug });
    }

    const linePath = join(brandDir, line.name);
    const articles = await listDir(linePath);
    for (const art of articles) {
      if (!art.isDirectory()) continue;
      const artPath = join(linePath, art.name);
      const files = await listDir(artPath);
      const imageNames = dedupeImages(files.filter((f) => f.isFile()));
      if (imageNames.length === 0) continue;

      const artShort = art.name.replace(/^Plinfa\s+\w+\s+/i, "");
      const artSlug = slugify(artShort);
      const slug = `${brandSlug}-${collectionSlug}-${artSlug}`;
      const name = art.name;
      const categorySlug = "plitka";
      const destDir = join(PUBLIC_CATALOG, brandSlug, collectionSlug, artSlug);
      const copied = await optimizeImagesToDest(artPath, destDir, imageNames);
      const urls = makeUrls(
        `${PUBLIC_URL_PREFIX}/${brandSlug}/${collectionSlug}/${artSlug}`,
        copied
      );
      products.push({
        slug,
        name,
        brandSlug,
        categorySlug,
        collectionSlug,
        images: urls.images,
        thumbnails: urls.thumbnails,
        sourcePath: `PLINFA/${line.name}/${art.name}`,
      });
    }
  }
}

// =============== MAIN ===============

async function main() {
  console.log("Очищаю public/catalog/...");
  await rm(PUBLIC_CATALOG, { recursive: true, force: true });
  await mkdir(PUBLIC_CATALOG, { recursive: true });

  console.log("Парсю Media...");
  const brandDirs = await listDir(MEDIA_ROOT);
  for (const b of brandDirs) {
    if (!b.isDirectory()) continue;
    const brandPath = join(MEDIA_ROOT, b.name);
    if (b.name === "Скрябин Керамикс") await parseSkryabin("skryabin", brandPath);
    else if (b.name === "Real Brick") await parseRealBrick("realbrick", brandPath);
    else if (b.name === "PLINFA") await parsePlinfa("plinfa", brandPath);
    else console.warn(`  пропускаю неизвестный бренд: ${b.name}`);
  }

  const brands = [
    { slug: "skryabin", name: "Скрябин Керамикс", description: "Клинкерный кирпич, ригель, плитка и брусчатка собственного производства.", hasProducts: true },
    { slug: "realbrick", name: "Real Brick", description: "Ручная формовка клинкерного кирпича и плитки, широкая палитра цветов.", hasProducts: true },
    { slug: "plinfa", name: "PLINFA", description: "Клинкерная плитка премиум-класса, коллекции Cassia, Iron, Twin.", hasProducts: true },
    { slug: "nelissen", name: "Nelissen", description: "Бельгийский клинкерный кирпич.", hasProducts: false },
    { slug: "sultan-ceramic", name: "Sultan Ceramic", description: "Керамический кирпич и плитка.", hasProducts: false },
    { slug: "terramatic", name: "Terramatic", description: "Клинкерная продукция.", hasProducts: false },
    { slug: "bogandinskiy-zavod", name: "Богандинский завод", description: "Строительный кирпич.", hasProducts: false },
  ];

  const categories = [
    { slug: "kirpich", name: "Кирпич" },
    { slug: "plitka", name: "Плитка" },
    { slug: "rigel", name: "Ригель" },
    { slug: "bruschatka", name: "Брусчатка" },
  ];

  products.sort((a, b) => a.slug.localeCompare(b.slug));

  const header = `// AUTO-GENERATED by scripts/build-catalog.mjs — do not edit by hand.
// Regenerate: \`node scripts/build-catalog.mjs\`

import type { Brand, Category, Collection, Product } from "./types";

export const brands: Brand[] = ${JSON.stringify(brands, null, 2)};

export const categories: Category[] = ${JSON.stringify(categories, null, 2)};

export const collections: Collection[] = ${JSON.stringify(collections, null, 2)};

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

  await mkdir(dirname(GEN_FILE), { recursive: true });
  await writeFile(GEN_FILE, header, "utf8");

  const byBrand = Object.fromEntries(
    brands
      .filter((b) => b.hasProducts)
      .map((b) => [b.slug, products.filter((p) => p.brandSlug === b.slug).length])
  );
  console.log("\nГотово. Товары по брендам:");
  for (const [k, v] of Object.entries(byBrand)) console.log(`  ${k}: ${v}`);
  console.log(`  ВСЕГО: ${products.length}`);
  console.log(`Сгенерирован: ${GEN_FILE}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
