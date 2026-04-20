export interface Brand {
  slug: string;
  name: string;
  description: string;
  logo?: string;
  hasProducts: boolean;
}

export interface Category {
  slug: string;
  name: string;
}

export interface Collection {
  slug: string;
  name: string;
  brandSlug: string;
}

export interface Product {
  slug: string;
  name: string;
  brandSlug: string;
  categorySlug: string;
  collectionSlug: string | null;
  images: string[];
  thumbnails: string[];
  sourcePath: string;
}
