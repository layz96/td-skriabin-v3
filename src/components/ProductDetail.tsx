"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import RequestModal from "@/components/RequestModal";
import { Product, getProductsByCategory } from "@/data/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs
          items={[
            { label: "Каталог", href: "/td-skriabin-v3/catalog" },
            {
              label: product.category,
              href: `/td-skriabin-v3/catalog/${product.categorySlug}`,
            },
            { label: product.name },
          ]}
        />

        {/* Product detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Images */}
          <div>
            <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-3">
              <img
                src={product.images[activeImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.inStock && (
                <span className="absolute top-4 left-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                  В наличии
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
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
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="text-sm text-neutral-400 mb-2">{product.brand}</div>
            <h1 className="text-[28px] lg:text-[36px] font-semibold text-brand-text mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-neutral-500 text-base mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Prices */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-3xl font-bold text-brand-text">
                  {product.pricePerUnit} &#8381;
                </span>
                <span className="text-neutral-400">/{product.unit}</span>
              </div>
              <div className="text-sm text-neutral-500 mb-6">
                Цена за м&sup2;:{" "}
                <span className="font-semibold text-brand-text">
                  {product.pricePerSqm.toLocaleString("ru-RU")} &#8381;
                </span>
              </div>
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

            {/* Specs */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-brand-text mb-4">
                Характеристики
              </h3>
              <div className="space-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-b-0"
                  >
                    <span className="text-sm text-neutral-500">{key}</span>
                    <span className="text-sm font-medium text-brand-text">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="pb-16">
            <h2 className="section-title mb-8">Похожие товары</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <RequestModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
