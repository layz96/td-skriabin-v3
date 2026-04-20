import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import {
  brands,
  categories,
  getBrandBySlug,
  getCollectionsByBrand,
  getProductsByBrand,
} from "@/data/products";

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.slug }));
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = getBrandBySlug(params.brand);
  if (!brand) notFound();

  const brandProducts = getProductsByBrand(brand.slug);
  const brandCollections = getCollectionsByBrand(brand.slug);

  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs
          items={[
            { label: "Бренды", href: "/brands" },
            { label: brand.name },
          ]}
        />

        <div className="bg-white rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-brand-light flex items-center justify-center shrink-0">
              <span className="text-brand-accent font-bold text-2xl">
                {brand.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h1 className="text-[32px] lg:text-[40px] font-semibold text-brand-text mb-3">
                {brand.name}
              </h1>
              <p className="text-neutral-500 text-base leading-relaxed max-w-[700px]">
                {brand.description}
              </p>
            </div>
          </div>
        </div>

        {!brand.hasProducts ? (
          <div className="bg-white rounded-2xl p-10 text-center mb-16">
            <h2 className="text-2xl font-semibold text-brand-text mb-3">
              Ассортимент уточняется
            </h2>
            <p className="text-neutral-500 max-w-[500px] mx-auto mb-6">
              Каталог товаров {brand.name} появится в ближайшее время. Свяжитесь с нами —
              уточним наличие и подберём аналоги из других брендов.
            </p>
            <a href="/contacts" className="btn-primary">
              Связаться
            </a>
          </div>
        ) : (
          <div className="space-y-12 pb-16">
            {categories.map((cat) => {
              const inCat = brandProducts.filter((p) => p.categorySlug === cat.slug);
              if (inCat.length === 0) return null;

              const collectionsInCat = brandCollections.filter((c) =>
                inCat.some((p) => p.collectionSlug === c.slug)
              );
              const uncollected = inCat.filter((p) => !p.collectionSlug);

              return (
                <section key={cat.slug}>
                  <h2 className="section-title mb-6">
                    {cat.name}{" "}
                    <span className="text-neutral-400 font-normal">({inCat.length})</span>
                  </h2>

                  {uncollected.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
                      {uncollected.map((p) => (
                        <ProductCard key={p.slug} product={p} />
                      ))}
                    </div>
                  )}

                  {collectionsInCat.map((col) => {
                    const colProducts = inCat.filter(
                      (p) => p.collectionSlug === col.slug
                    );
                    return (
                      <div key={col.slug} className="mb-8">
                        <h3 className="text-lg font-semibold text-brand-text mb-4">
                          Коллекция {col.name}
                          <span className="text-neutral-400 font-normal ml-2">
                            ({colProducts.length})
                          </span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                          {colProducts.map((p) => (
                            <ProductCard key={p.slug} product={p} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
