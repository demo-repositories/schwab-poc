import { sanityFetch } from "@/lib/sanity/fetch";
import RenderBynderBlock from "./component";
import query from "./query";
import { ISanityDocument } from "@/lib/sanity/types";
/**
 * Maps to the 'dynamicCta' object type in Sanity.
 *
 * Gets pulled into 'CustomPortableText'
 */

export interface ISanityBynderBlockDocument extends ISanityDocument {
  title: string;
  caption: any[];
  bynderAsset: any;
}

export default async function BynderBlock(props: { _ref: string }) {
  const params = { _id: props._ref };

  const data = await sanityFetch<ISanityBynderBlockDocument>({ query, params });

  return <RenderBynderBlock {...data} />;
}
