export type { Brand, Category, Collection, Product } from "./types";

import type { Brand, Category, Collection, Product } from "./types";
import {
  brands as genBrands,
  categories as genCategories,
  collections as genCollections,
  products as genProducts,
} from "./catalog.generated";

export const brands: Brand[] = genBrands;
export const categories: Category[] = genCategories;
export const collections: Collection[] = genCollections;
export const products: Product[] = genProducts;

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brandSlug === brandSlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getCollectionBySlug(slug: string, brandSlug?: string): Collection | undefined {
  return collections.find(
    (c) => c.slug === slug && (brandSlug ? c.brandSlug === brandSlug : true)
  );
}

export function getCollectionsByBrand(brandSlug: string): Collection[] {
  return collections.filter((c) => c.brandSlug === brandSlug);
}

export function countProductsInCategory(categorySlug: string): number {
  return products.filter((p) => p.categorySlug === categorySlug).length;
}
