import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { products, getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
