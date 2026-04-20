"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  categories,
  products,
  countProductsInCategory,
  type Category,
} from "@/data/products";
import ScrollReveal from "./ScrollReveal";

function pickCover(categorySlug: string): string | undefined {
  const p = products.find((pp) => pp.categorySlug === categorySlug);
  return p?.thumbnails[0] ?? p?.images[0];
}

export default function CatalogGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <ScrollReveal direction="up">
          <h2 className="section-title mb-10">Каталог продукции</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, idx) => (
            <CategoryCard key={cat.slug} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const cover = pickCover(category.slug);
  const count = countProductsInCategory(category.slug);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        href={`/catalog/${category.slug}`}
        className="catalog-card group relative block h-[340px] overflow-hidden"
      >
        {cover ? (
          <img
            src={cover}
            alt={category.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[0.6s] group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-brand-light" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
          <div>
            <h3 className="text-white text-xl font-semibold mb-1 transition-transform duration-200 group-hover:-translate-y-0.5">
              {category.name}
            </h3>
            <span className="text-neutral-300 text-sm">{count} товаров</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-brand-accent transition-all duration-200 shrink-0">
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
