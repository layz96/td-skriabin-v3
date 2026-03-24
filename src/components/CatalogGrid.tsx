import Link from "next/link";
import { categories } from "@/data/products";

export default function CatalogGrid() {
  // Build rows: large+small or small+large alternating
  const rows: { left: typeof categories[0]; right: typeof categories[0] | null }[] = [];
  let i = 0;
  let rowIndex = 0;

  while (i < categories.length) {
    const isEvenRow = rowIndex % 2 === 0;
    const current = categories[i];
    const nextCat = i + 1 < categories.length ? categories[i + 1] : null;

    if (current.size === "large" && nextCat && nextCat.size === "small") {
      if (isEvenRow) {
        rows.push({ left: current, right: nextCat });
      } else {
        rows.push({ left: nextCat, right: current });
      }
      i += 2;
    } else if (current.size === "small" && nextCat && nextCat.size === "large") {
      if (isEvenRow) {
        rows.push({ left: nextCat, right: current });
      } else {
        rows.push({ left: current, right: nextCat });
      }
      i += 2;
    } else {
      rows.push({ left: current, right: null });
      i += 1;
    }
    rowIndex++;
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <h2 className="section-title mb-10">Каталог продукции</h2>
        <div className="space-y-5">
          {rows.map((row, idx) => {
            const isEvenRow = idx % 2 === 0;
            return (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {row.right ? (
                  isEvenRow ? (
                    <>
                      <CategoryCard
                        category={row.left}
                        className="md:col-span-2"
                      />
                      <CategoryCard
                        category={row.right}
                        className="md:col-span-1"
                      />
                    </>
                  ) : (
                    <>
                      <CategoryCard
                        category={row.left}
                        className="md:col-span-1"
                      />
                      <CategoryCard
                        category={row.right}
                        className="md:col-span-2"
                      />
                    </>
                  )
                ) : (
                  <CategoryCard
                    category={row.left}
                    className="md:col-span-3"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  className = "",
}: {
  category: typeof categories[0];
  className?: string;
}) {
  return (
    <Link
      href={`/td-skriabin-v3/catalog/${category.slug}`}
      className={`group relative block h-[387px] overflow-hidden ${className}`}
    >
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[0.4s] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        <div>
          <h3 className="text-white text-xl font-semibold mb-1">
            {category.name}
          </h3>
          <span className="text-neutral-300 text-sm">
            {category.productCount} товаров
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-brand-accent transition-all duration-200 shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
