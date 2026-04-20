import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { brands, getProductsByBrand } from "@/data/products";

export default function BrandsPage() {
  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs items={[{ label: "Бренды" }]} />

        <h1 className="text-[40px] lg:text-[48px] font-semibold text-brand-text mb-4">
          Наши бренды
        </h1>
        <p className="text-neutral-500 text-lg mb-12 max-w-[600px]">
          Работаем с ведущими производителями клинкерного кирпича и керамических
          материалов из России и Европы.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
          {brands.map((brand) => {
            const count = getProductsByBrand(brand.slug).length;
            const href = `/brands/${brand.slug}`;
            return (
              <Link
                key={brand.slug}
                href={href}
                className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-brand-light flex items-center justify-center">
                    <span className="text-brand-accent font-bold text-xl">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                  {!brand.hasProducts && (
                    <span className="text-xs uppercase tracking-wide text-neutral-400 bg-neutral-100 px-2 py-1 rounded-full">
                      Скоро
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-brand-text mb-2 group-hover:text-brand-accent transition-colors">
                  {brand.name}
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {brand.description}
                </p>
                <div className="text-sm text-neutral-400">
                  {brand.hasProducts ? `${count} товаров в каталоге` : "Ассортимент уточняется"}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
