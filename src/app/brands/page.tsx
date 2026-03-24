import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { brands, products } from "@/data/products";

export default function BrandsPage() {
  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs items={[{ label: "Бренды" }]} />

        <h1 className="text-[40px] lg:text-[48px] font-semibold text-brand-text mb-4">
          Наши бренды
        </h1>
        <p className="text-neutral-500 text-lg mb-12 max-w-[600px]">
          Мы работаем с ведущими производителями клинкерного кирпича и керамических
          материалов из России и Европы
        </p>

        <div className="space-y-8 pb-16">
          {brands.map((brand) => {
            const brandProducts = products.filter((p) => p.brand === brand.name);
            return (
              <div
                key={brand.slug}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
                  {/* Brand info */}
                  <div>
                    <div className="w-20 h-20 rounded-2xl bg-brand-light flex items-center justify-center mb-4">
                      <span className="text-brand-accent font-bold text-xl">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-brand-text mb-1">
                      {brand.name}
                    </h2>
                    <span className="text-sm text-brand-accent font-medium">
                      {brand.country}
                    </span>
                    <p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                      {brand.description}
                    </p>
                    <div className="mt-4 text-sm text-neutral-400">
                      {brandProducts.length} товаров в каталоге
                    </div>
                  </div>

                  {/* Brand products */}
                  {brandProducts.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {brandProducts.slice(0, 3).map((product) => (
                        <Link
                          key={product.id}
                          href={`/td-skriabin-v3/product/${product.slug}`}
                          className="group"
                        >
                          <div className="aspect-square rounded-xl overflow-hidden bg-brand-light mb-2">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="text-sm font-medium text-brand-text group-hover:text-brand-accent transition-colors line-clamp-2">
                            {product.name}
                          </div>
                          <div className="text-sm text-neutral-400">
                            {product.pricePerUnit} &#8381;/{product.unit}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
