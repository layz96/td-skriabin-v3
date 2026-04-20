"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Brand, Product } from "@/data/products";

interface Props {
  products: Product[];
  brandsInCategory: Brand[];
}

export default function CategoryBrandFilter({ products, brandsInCategory }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active ? products.filter((p) => p.brandSlug === active) : products),
    [products, active]
  );

  if (products.length === 0) return null;

  return (
    <div>
      {brandsInCategory.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActive(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === null
                ? "bg-brand-accent text-white"
                : "bg-white text-brand-text hover:bg-neutral-100"
            }`}
          >
            Все ({products.length})
          </button>
          {brandsInCategory.map((b) => {
            const count = products.filter((p) => p.brandSlug === b.slug).length;
            return (
              <button
                key={b.slug}
                onClick={() => setActive(b.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === b.slug
                    ? "bg-brand-accent text-white"
                    : "bg-white text-brand-text hover:bg-neutral-100"
                }`}
              >
                {b.name} ({count})
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pb-16">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
