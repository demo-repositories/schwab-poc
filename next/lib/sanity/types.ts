import { TToObject } from "@/components/button";
import { TSanityImageProps } from "@/components/sanity-image";
/**
 * Place for random sanity-specific types that dont have logical files to live in
 */
type TSanitySEOTag = {
  tag: string;
  value: string;
};
export type TSanitySEOData = {
  tags: TSanitySEOTag[];
};

type TTaxonomyAttribute = {
  name: string;
  slug: string;
  description: string;
};
type TTaxonomyTerm = {
  name: string;
  slug: string;
};
export type TTaxonomyItem = {
  taxonomyAttribute: TTaxonomyAttribute[];
  terms: TTaxonomyTerm[];
};
// Individual card object
export type TSanityCard = {
  title?: string;
  body: string;
  icon?: any;
  to: TToObject;
  _key: string;
};
export type TSanityCardDeckDocument = {
  title?: string;
  cardType: "iconCard" | "ctaCard";
  ctaText?: string;
  cards: TSanityCard[];
};
export interface ISanityDocument {
  _id: string;
  _type: string;
  _updatedAt: string;
  _createdAt: string;
  _publishedAt: string;
  _key: string;
}
export interface ISanityPageDocument extends ISanityDocument {
  title: string;
  summary?: string;
  slug: {
    current: string;
  };
  featuredImage?: TSanityImageProps;
  seoData: TSanitySEOData;
}
