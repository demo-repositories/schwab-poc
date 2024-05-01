import { sanityFetch } from "@/lib/sanity/fetch";
import RenderBynderBlock from "./component";
import query from "./query";
import { ISanityDocument } from "@/lib/sanity/types";
/**
 * Maps to the 'dynamicCta' object type in Sanity.
 *
 * Gets pulled into 'CustomPortableText'
 */

// Params for query
type TParams = {
  _id: string;
};
export interface ISanityBynderBlockDocument extends ISanityDocument {
  title: string;
  caption: any[];
  bynderAsset: any;
}

export default async function BynderBlock(props) {
  const params = { _id: props._ref };

  const data = await sanityFetch({ query, params });

  return <RenderBynderBlock {...data} />;
}
