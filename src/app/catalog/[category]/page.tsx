import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory, getCategoryBySlug } from "@/data/products";

export function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(params.category);

  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs
          items={[
            { label: "Каталог", href: "/td-skriabin-v3/catalog" },
            { label: category.name },
          ]}
        />

        {/* Category header */}
        <div className="relative rounded-2xl overflow-hidden mb-10 h-[240px]">
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center p-10">
            <div>
              <h1 className="text-[36px] lg:text-[44px] font-semibold text-white mb-2">
                {category.name}
              </h1>
              <p className="text-neutral-300 text-base max-w-[500px]">
                {category.description}
              </p>
              <span className="inline-block mt-3 text-brand-accent font-medium text-sm">
                {category.productCount} товаров в категории
              </span>
            </div>
          </div>
        </div>

        {/* Products */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pb-16">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-400 text-lg mb-4">
              Товары в этой категории скоро появятся
            </p>
            <a href="/td-skriabin-v3/catalog" className="btn-primary">
              Вернуться в каталог
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
