import Link from "next/link";
import { Product, getBrandBySlug } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const brand = getBrandBySlug(product.brandSlug);
  const preview = product.thumbnails[0] ?? product.images[0];

  return (
    <Link
      href={`/product/${product.slug}`}
      className="catalog-card group bg-white border border-neutral-100 hover:border-brand-accent/30 hover:shadow-lg block"
    >
      <div className="relative aspect-square overflow-hidden bg-brand-light">
        {preview && (
          <img
            src={preview}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-[0.6s] group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-4">
        <div className="text-xs text-neutral-400 mb-1">{brand?.name ?? ""}</div>
        <h3 className="text-sm font-medium text-brand-text leading-snug group-hover:text-brand-accent transition-colors duration-200 line-clamp-2">
          {product.name}
        </h3>
      </div>
    </Link>
  );
}
