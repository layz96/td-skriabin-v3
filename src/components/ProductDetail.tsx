"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import RequestModal from "@/components/RequestModal";
import {
  Product,
  getProductsByCategory,
  getCategoryBySlug,
  getBrandBySlug,
  getCollectionBySlug,
} from "@/data/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const category = getCategoryBySlug(product.categorySlug);
  const brand = getBrandBySlug(product.brandSlug);
  const collection = product.collectionSlug
    ? getCollectionBySlug(product.collectionSlug, product.brandSlug)
    : null;

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug && p.brandSlug === product.brandSlug)
    .slice(0, 4);

  const preview = product.images[activeImage] ?? product.images[0];

  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs
          items={[
            { label: "Каталог", href: "/catalog" },
            {
              label: category?.name ?? product.categorySlug,
              href: `/catalog/${product.categorySlug}`,
            },
            { label: product.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-3">
              {preview && (
                <img
                  src={preview}
                  alt={product.name}
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 flex-wrap">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      i === activeImage
                        ? "border-brand-accent"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    <img
                      src={product.thumbnails[i] ?? img}
                      alt={`${product.name} ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="text-sm text-neutral-400 mb-2">
              {brand?.name}
              {collection ? ` · ${collection.name}` : ""}
            </div>
            <h1 className="text-[28px] lg:text-[36px] font-semibold text-brand-text mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="bg-white rounded-xl p-6 mb-6">
              <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
                Уточните наличие, цену и технические характеристики у менеджера — подберём формат и рассчитаем объём под ваш проект.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-primary flex-1"
                >
                  Оставить заявку
                </button>
                <a href="tel:+73452500600" className="btn-outline flex-1 text-center">
                  Позвонить
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-sm text-neutral-500 space-y-2">
              <div className="flex justify-between">
                <span>Бренд</span>
                <span className="font-medium text-brand-text">{brand?.name}</span>
              </div>
              {collection && (
                <div className="flex justify-between">
                  <span>Коллекция</span>
                  <span className="font-medium text-brand-text">{collection.name}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Категория</span>
                <span className="font-medium text-brand-text">{category?.name}</span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="pb-16">
            <h2 className="section-title mb-8">Похожие товары</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <RequestModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
