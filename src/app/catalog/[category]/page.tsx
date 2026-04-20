import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryBrandFilter from "@/components/CategoryBrandFilter";
import {
  brands as allBrands,
  categories,
  getCategoryBySlug,
  getProductsByCategory,
  products as allProducts,
} from "@/data/products";

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(params.category);
  const brandsInCategory = allBrands.filter((b) =>
    categoryProducts.some((p) => p.brandSlug === b.slug)
  );
  const cover = categoryProducts[0]?.images[0] ?? allProducts[0]?.images[0];

  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs
          items={[
            { label: "Каталог", href: "/catalog" },
            { label: category.name },
          ]}
        />

        <div className="relative rounded-2xl overflow-hidden mb-10 h-[240px]">
          {cover && (
            <img
              src={cover}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center p-10">
            <div>
              <h1 className="text-[36px] lg:text-[44px] font-semibold text-white mb-2">
                {category.name}
              </h1>
              <span className="inline-block mt-3 text-brand-accent font-medium text-sm">
                {categoryProducts.length} товаров в категории
              </span>
            </div>
          </div>
        </div>

        {categoryProducts.length > 0 ? (
          <CategoryBrandFilter
            products={categoryProducts}
            brandsInCategory={brandsInCategory}
          />
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-400 text-lg mb-4">
              Товары в этой категории скоро появятся
            </p>
            <a href="/catalog" className="btn-primary">
              Вернуться в каталог
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
