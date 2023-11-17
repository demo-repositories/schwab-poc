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
