import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/td-skriabin-v3/product/${product.slug}`}
      className="group bg-white border border-neutral-100 hover:border-brand-accent/30 transition-all duration-200 hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-brand-light">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[0.4s] group-hover:scale-105"
        />
        {product.inStock && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2.5 py-1 rounded-full font-medium">
            В наличии
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs text-neutral-400 mb-1">{product.brand}</div>
        <h3 className="text-sm font-medium text-brand-text leading-snug mb-2 group-hover:text-brand-accent transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-lg font-semibold text-brand-text">
              {product.pricePerUnit} &#8381;
            </span>
            <span className="text-xs text-neutral-400 ml-1">/{product.unit}</span>
          </div>
          <span className="text-xs text-neutral-400">
            {product.pricePerSqm.toLocaleString("ru-RU")} &#8381;/м&sup2;
          </span>
        </div>
      </div>
    </Link>
  );
}
