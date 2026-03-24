import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export default function CatalogPage() {
  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs items={[{ label: "Каталог" }]} />

        <h1 className="text-[40px] lg:text-[48px] font-semibold text-brand-text mb-10">
          Каталог продукции
        </h1>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/td-skriabin-v3/catalog/${cat.slug}`}
              className="group relative block h-[260px] overflow-hidden rounded-xl"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[0.4s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-0.5">
                    {cat.name}
                  </h3>
                  <span className="text-neutral-300 text-sm">
                    {cat.productCount} товаров
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-brand-accent transition-all duration-200 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All products */}
        <h2 className="section-title mb-8">Все товары</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
