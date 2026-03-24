export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  brand: string;
  pricePerUnit: number;
  pricePerSqm: number;
  unit: string;
  image: string;
  images: string[];
  specs: Record<string, string>;
  description: string;
  inStock: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  size: "large" | "small";
}

export interface Brand {
  slug: string;
  name: string;
  country: string;
  description: string;
  logo: string;
}

export interface Subcategory {
  slug: string;
  name: string;
}

export const categories: Category[] = [
  {
    slug: "oblicovochnyj-kirpich",
    name: "Облицовочный кирпич",
    description:
      "Клинкерный кирпич, кирпич ручной формовки и минеральный кирпич для фасадов зданий. Широкий выбор цветов и фактур.",
    image: "/td-skriabin-v3/images/cat-brick.jpg",
    productCount: 186,
    size: "large",
  },
  {
    slug: "fasadnaya-plitka-keramogranit",
    name: "Фасадная плитка, керамогранит",
    description:
      "Клинкерная плитка, минеральная плитка и керамогранит для облицовки фасадов, цоколей и интерьеров.",
    image: "/td-skriabin-v3/images/cat-tile.jpg",
    productCount: 94,
    size: "small",
  },
  {
    slug: "bruschatka-dlya-moscheniya",
    name: "Брусчатка для мощения",
    description:
      "Клинкерная брусчатка для мощения дорожек, площадок, террас и парковок. Высокая прочность и морозостойкость.",
    image: "/td-skriabin-v3/images/cat-paving.jpg",
    productCount: 54,
    size: "small",
  },
  {
    slug: "kladochnye-smesi-zatirki",
    name: "Кладочные смеси, затирки",
    description:
      "Профессиональные кладочные растворы, затирки и клеевые составы для работы с клинкером и керамикой.",
    image: "/td-skriabin-v3/images/prod-8.jpg",
    productCount: 32,
    size: "large",
  },
];

export const subcategories: Record<string, Subcategory[]> = {
  "oblicovochnyj-kirpich": [
    { slug: "klinkernyj-kirpich", name: "Клинкерный кирпич" },
    { slug: "kirpich-ruchnoj-formovki", name: "Кирпич ручной формовки" },
    { slug: "mineralnyj-kirpich", name: "Минеральный кирпич" },
  ],
  "fasadnaya-plitka-keramogranit": [
    { slug: "klinkernaya-plitka", name: "Клинкерная плитка" },
    { slug: "mineralnaya-plitka", name: "Минеральная плитка" },
    { slug: "keramogranit", name: "Керамогранит" },
  ],
};

export const brands: Brand[] = [
  {
    slug: "skriabin-ceramics",
    name: "Скрябин Керамикс",
    country: "Россия",
    description:
      "Собственное производство архитектурного клинкера. Уникальность каждого изделия, контроль качества на всех этапах.",
    logo: "/td-skriabin-v3/images/logo.png",
  },
  {
    slug: "real-brick",
    name: "Реал Брик",
    country: "Россия",
    description:
      "Многокомпонентные минеральные продукты — плитка, кирпич, черепица. Инновационные технологии производства.",
    logo: "/td-skriabin-v3/images/logo.png",
  },
  {
    slug: "plinfa",
    name: "Plinfa",
    country: "Россия",
    description:
      "Производитель клинкерного кирпича и плитки. Современное оборудование и европейские стандарты качества.",
    logo: "/td-skriabin-v3/images/logo.png",
  },
  {
    slug: "nelissen",
    name: "Nelissen",
    country: "Нидерланды",
    description:
      "Голландский производитель клинкерного кирпича премиум-класса. Более 100 лет традиций качества.",
    logo: "/td-skriabin-v3/images/logo.png",
  },
  {
    slug: "klinkers",
    name: "Klinkers",
    country: "Европа",
    description:
      "Европейский бренд клинкерных материалов. Широкий ассортимент кирпича и брусчатки для архитектурных проектов.",
    logo: "/td-skriabin-v3/images/logo.png",
  },
  {
    slug: "terramatic",
    name: "Terramatic",
    country: "Россия",
    description:
      "Завод клинкера в Кургане. Российское производство европейского качества.",
    logo: "/td-skriabin-v3/images/logo.png",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "kirpich-nelissen-caso",
    name: "Кирпич Nelissen Caso",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Nelissen",
    pricePerUnit: 98,
    pricePerSqm: 5488,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-1.jpg",
    images: ["/td-skriabin-v3/images/prod-1.jpg"],
    specs: {
      Формат: "210x100x50 мм",
      Пустотность: "Полнотелый",
      Вес: "2.1 кг",
      "Кол-во в поддоне": "660 шт",
      "Расход на м2": "56 шт",
      Водопоглощение: "<=6%",
      Морозостойкость: "F100",
    },
    description:
      "Клинкерный кирпич Nelissen Caso -- элегантный темно-серый оттенок с благородной текстурой. Идеален для современных фасадов в стиле минимализм и лофт.",
    inStock: true,
  },
  {
    id: "2",
    slug: "kirpich-sultan-ceramic-klassik",
    name: "Кирпич Sultan Ceramic Классик",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Sultan Ceramic",
    pricePerUnit: 42,
    pricePerSqm: 2352,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-2.jpg",
    images: ["/td-skriabin-v3/images/prod-2.jpg"],
    specs: {
      Формат: "250x120x65 мм",
      Пустотность: "Пустотелый",
      Вес: "2.4 кг",
      "Кол-во в поддоне": "480 шт",
      "Расход на м2": "52 шт",
      Водопоглощение: "<=8%",
      Морозостойкость: "F75",
    },
    description:
      "Классический клинкерный кирпич теплого красно-коричневого оттенка. Универсальное решение для фасадов жилых и коммерческих зданий.",
    inStock: true,
  },
  {
    id: "3",
    slug: "kirpich-real-brick-antik",
    name: "Кирпич Real Brick Антик",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Real Brick",
    pricePerUnit: 36,
    pricePerSqm: 2016,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-3.jpg",
    images: ["/td-skriabin-v3/images/prod-3.jpg"],
    specs: {
      Формат: "250x120x65 мм",
      Пустотность: "Пустотелый",
      Вес: "2.3 кг",
      "Кол-во в поддоне": "512 шт",
      "Расход на м2": "52 шт",
      Водопоглощение: "<=10%",
      Морозостойкость: "F50",
    },
    description:
      "Кирпич ручной формовки с эффектом состаренной поверхности. Создает атмосферу старинной кладки на современном фасаде.",
    inStock: true,
  },
  {
    id: "4",
    slug: "kirpich-terramatic-graffit",
    name: "Кирпич Terramatic Графит",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Terramatic",
    pricePerUnit: 38,
    pricePerSqm: 2128,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-4.jpg",
    images: ["/td-skriabin-v3/images/prod-4.jpg"],
    specs: {
      Формат: "250x120x65 мм",
      Пустотность: "Полнотелый",
      Вес: "3.6 кг",
      "Кол-во в поддоне": "400 шт",
      "Расход на м2": "52 шт",
      Водопоглощение: "<=5%",
      Морозостойкость: "F100",
    },
    description:
      "Темный клинкерный кирпич цвета графита. Премиальный выбор для архитектурных проектов с выразительным характером.",
    inStock: true,
  },
  {
    id: "5",
    slug: "kirpich-bogandinskij-pesochnyj",
    name: "Кирпич Богандинский Песочный",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Богандинский кирпичный завод",
    pricePerUnit: 28,
    pricePerSqm: 1568,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-5.jpg",
    images: ["/td-skriabin-v3/images/prod-5.jpg"],
    specs: {
      Формат: "250x120x65 мм",
      Пустотность: "Пустотелый",
      Вес: "2.1 кг",
      "Кол-во в поддоне": "480 шт",
      "Расход на м2": "52 шт",
      Водопоглощение: "<=12%",
      Морозостойкость: "F50",
    },
    description:
      "Кирпич ручной формовки теплого песочного оттенка. Экологичный материал для создания уютных фасадов в классическом стиле.",
    inStock: true,
  },
  {
    id: "6",
    slug: "kirpich-skriabin-ceramics-premium",
    name: "Кирпич Скрябин Керамикс Премиум",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Скрябин Керамикс",
    pricePerUnit: 45,
    pricePerSqm: 2520,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-6.jpg",
    images: ["/td-skriabin-v3/images/prod-6.jpg"],
    specs: {
      Формат: "250x120x65 мм",
      Пустотность: "Полнотелый",
      Вес: "3.8 кг",
      "Кол-во в поддоне": "420 шт",
      "Расход на м2": "52 шт",
      Водопоглощение: "<=4%",
      Морозостойкость: "F150",
    },
    description:
      "Флагманский клинкерный кирпич собственного производства. Каждое изделие уникально благодаря ручной обработке поверхности.",
    inStock: true,
  },
  {
    id: "7",
    slug: "bruschatka-skriabin-sortirovka-30",
    name: "Брусчатка Скрябин Керамикс Сортировка 30",
    category: "Клинкерная брусчатка",
    categorySlug: "bruschatka-dlya-moscheniya",
    brand: "Скрябин Керамикс",
    pricePerUnit: 62,
    pricePerSqm: 3472,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-7.jpg",
    images: ["/td-skriabin-v3/images/prod-7.jpg"],
    specs: {
      Формат: "200x100x52 мм",
      Вес: "2.0 кг",
      "Кол-во в поддоне": "720 шт",
      "Расход на м2": "48 шт",
      Водопоглощение: "<=3%",
      Морозостойкость: "F200",
    },
    description:
      "Клинкерная брусчатка с уникальной сортировкой цветов. Идеальна для мощения дорожек, террас и парковочных зон.",
    inStock: true,
  },
  {
    id: "8",
    slug: "bruschatka-sultan-classic",
    name: "Брусчатка Sultan Ceramic Classic",
    category: "Клинкерная брусчатка",
    categorySlug: "bruschatka-dlya-moscheniya",
    brand: "Sultan Ceramic",
    pricePerUnit: 55,
    pricePerSqm: 3080,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-8.jpg",
    images: ["/td-skriabin-v3/images/prod-8.jpg"],
    specs: {
      Формат: "200x100x45 мм",
      Вес: "1.8 кг",
      "Кол-во в поддоне": "800 шт",
      "Расход на м2": "48 шт",
      Водопоглощение: "<=4%",
      Морозостойкость: "F150",
    },
    description:
      "Классическая клинкерная брусчатка натурального терракотового оттенка. Традиционный выбор для благоустройства территорий.",
    inStock: true,
  },
  {
    id: "9",
    slug: "plitka-nelissen-fasad-grey",
    name: "Плитка Nelissen Фасад Grey",
    category: "Фасадная плитка",
    categorySlug: "fasadnaya-plitka-keramogranit",
    brand: "Nelissen",
    pricePerUnit: 78,
    pricePerSqm: 4368,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-9.jpg",
    images: ["/td-skriabin-v3/images/prod-9.jpg"],
    specs: {
      Формат: "240x71x14 мм",
      Вес: "0.4 кг",
      "Кол-во в упаковке": "48 шт",
      "Расход на м2": "48 шт",
      Водопоглощение: "<=3%",
      Морозостойкость: "F100",
    },
    description:
      "Клинкерная фасадная плитка элегантного серого оттенка. Легкая альтернатива кирпичу для вентилируемых фасадов и реновации.",
    inStock: true,
  },
  {
    id: "10",
    slug: "plitka-real-brick-fasad-antik",
    name: "Плитка Real Brick Фасад Антик",
    category: "Фасадная плитка",
    categorySlug: "fasadnaya-plitka-keramogranit",
    brand: "Real Brick",
    pricePerUnit: 32,
    pricePerSqm: 1792,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-10.jpg",
    images: ["/td-skriabin-v3/images/prod-10.jpg"],
    specs: {
      Формат: "240x71x10 мм",
      Вес: "0.3 кг",
      "Кол-во в упаковке": "60 шт",
      "Расход на м2": "48 шт",
      Водопоглощение: "<=8%",
      Морозостойкость: "F75",
    },
    description:
      "Фасадная плитка с эффектом состаренного кирпича. Придает зданию характер и индивидуальность при минимальной нагрузке на стены.",
    inStock: true,
  },
  {
    id: "11",
    slug: "cherepica-nelissen-classic-red",
    name: "Черепица Nelissen Classic Red",
    category: "Клинкерная черепица",
    categorySlug: "kladochnye-smesi-zatirki",
    brand: "Nelissen",
    pricePerUnit: 145,
    pricePerSqm: 2175,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-11.jpg",
    images: ["/td-skriabin-v3/images/prod-11.jpg"],
    specs: {
      Формат: "420x330 мм",
      Вес: "3.5 кг",
      "Кол-во на поддоне": "240 шт",
      "Расход на м2": "15 шт",
      Водопоглощение: "<=3%",
      Морозостойкость: "F150",
    },
    description:
      "Классическая керамическая черепица насыщенного красного цвета. Гарантия от производителя -- 50 лет.",
    inStock: true,
  },
  {
    id: "12",
    slug: "cherepica-terramatic-dark-brown",
    name: "Черепица Terramatic Темно-коричневая",
    category: "Клинкерная черепица",
    categorySlug: "kladochnye-smesi-zatirki",
    brand: "Terramatic",
    pricePerUnit: 95,
    pricePerSqm: 1425,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-12.jpg",
    images: ["/td-skriabin-v3/images/prod-12.jpg"],
    specs: {
      Формат: "420x330 мм",
      Вес: "3.2 кг",
      "Кол-во на поддоне": "260 шт",
      "Расход на м2": "15 шт",
      Водопоглощение: "<=5%",
      Морозостойкость: "F100",
    },
    description:
      "Керамическая черепица глубокого темно-коричневого оттенка. Отлично сочетается с фасадами из натурального камня и кирпича.",
    inStock: true,
  },
  {
    id: "13",
    slug: "kirpich-ruchnoj-formovki-antik-brown",
    name: "Кирпич ручной формовки Антик Браун",
    category: "Кирпич ручной формовки",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Богандинский кирпичный завод",
    pricePerUnit: 34,
    pricePerSqm: 1904,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-3.jpg",
    images: ["/td-skriabin-v3/images/prod-3.jpg"],
    specs: {
      Формат: "250x120x65 мм",
      Пустотность: "Полнотелый",
      Вес: "3.2 кг",
      "Кол-во в поддоне": "400 шт",
      "Расход на м2": "52 шт",
      Водопоглощение: "<=12%",
      Морозостойкость: "F50",
    },
    description:
      "Кирпич ручной формовки с эффектом старинной кладки. Уникальная текстура каждого изделия создает неповторимый рисунок фасада.",
    inStock: true,
  },
  {
    id: "14",
    slug: "kirpich-ruchnoj-formovki-ivori",
    name: "Кирпич ручной формовки Айвори",
    category: "Кирпич ручной формовки",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Real Brick",
    pricePerUnit: 38,
    pricePerSqm: 2128,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-5.jpg",
    images: ["/td-skriabin-v3/images/prod-5.jpg"],
    specs: {
      Формат: "250x120x65 мм",
      Пустотность: "Полнотелый",
      Вес: "3.0 кг",
      "Кол-во в поддоне": "420 шт",
      "Расход на м2": "52 шт",
      Водопоглощение: "<=10%",
      Морозостойкость: "F75",
    },
    description:
      "Кирпич ручной формовки светлого молочного оттенка. Идеален для фасадов в средиземноморском и классическом стиле.",
    inStock: true,
  },
  {
    id: "15",
    slug: "rigel-skriabin-long-format",
    name: "Ригельный кирпич Скрябин Лонг Формат",
    category: "Ригельный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Скрябин Керамикс",
    pricePerUnit: 85,
    pricePerSqm: 4760,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-4.jpg",
    images: ["/td-skriabin-v3/images/prod-4.jpg"],
    specs: {
      Формат: "490x115x40 мм",
      Пустотность: "Полнотелый",
      Вес: "3.8 кг",
      "Кол-во в поддоне": "320 шт",
      "Расход на м2": "36 шт",
      Водопоглощение: "<=4%",
      Морозостойкость: "F150",
    },
    description:
      "Ригельный кирпич удлиненного формата для создания современных горизонтальных фасадов. Подчеркивает архитектурные линии здания.",
    inStock: true,
  },
  {
    id: "16",
    slug: "rigel-terramatic-grey",
    name: "Ригельный кирпич Terramatic Грей",
    category: "Ригельный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Terramatic",
    pricePerUnit: 72,
    pricePerSqm: 4032,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-1.jpg",
    images: ["/td-skriabin-v3/images/prod-1.jpg"],
    specs: {
      Формат: "490x115x52 мм",
      Пустотность: "Полнотелый",
      Вес: "4.2 кг",
      "Кол-во в поддоне": "280 шт",
      "Расход на м2": "36 шт",
      Водопоглощение: "<=5%",
      Морозостойкость: "F100",
    },
    description:
      "Ригельный кирпич серого оттенка для минималистичных фасадов. Удлиненный формат создает элегантный горизонтальный ритм.",
    inStock: true,
  },
  {
    id: "17",
    slug: "stupeni-skriabin-classic",
    name: "Клинкерные ступени Скрябин Классик",
    category: "Клинкерные ступени",
    categorySlug: "bruschatka-dlya-moscheniya",
    brand: "Скрябин Керамикс",
    pricePerUnit: 890,
    pricePerSqm: 5340,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-7.jpg",
    images: ["/td-skriabin-v3/images/prod-7.jpg"],
    specs: {
      Формат: "330x245x20 мм",
      Вес: "2.8 кг",
      "Кол-во в упаковке": "8 шт",
      "Расход на м2": "6 шт",
      Водопоглощение: "<=3%",
      Морозостойкость: "F200",
    },
    description:
      "Клинкерные ступени с нескользящей поверхностью. Идеальное решение для наружных лестниц, крылец и террас.",
    inStock: true,
  },
  {
    id: "18",
    slug: "stupeni-sultan-terracotta",
    name: "Клинкерные ступени Sultan Терракота",
    category: "Клинкерные ступени",
    categorySlug: "bruschatka-dlya-moscheniya",
    brand: "Sultan Ceramic",
    pricePerUnit: 750,
    pricePerSqm: 4500,
    unit: "шт",
    image: "/td-skriabin-v3/images/prod-8.jpg",
    images: ["/td-skriabin-v3/images/prod-8.jpg"],
    specs: {
      Формат: "330x245x18 мм",
      Вес: "2.5 кг",
      "Кол-во в упаковке": "10 шт",
      "Расход на м2": "6 шт",
      Водопоглощение: "<=4%",
      Морозостойкость: "F150",
    },
    description:
      "Клинкерные ступени терракотового оттенка. Классическое решение для входных групп и ландшафтного дизайна.",
    inStock: true,
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
