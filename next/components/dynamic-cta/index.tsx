import RenderDynamicCTA from "./component";
import { TButtonProps } from "@/components/button";
import query from "./query";
import { ISanityDocument } from "@/lib/sanity/types";
import { sanityFetch } from "@/lib/sanity/fetch";
/**
 * Maps to the 'dynamicCta' object type in Sanity.
 *
 * Gets pulled into 'CustomPortableText'
 */

interface ISanityDynamicCTADocument extends ISanityDocument {
  heading: string;
  button: TButtonProps;
}

export default async function DynamicCTA(props: { _ref: string }) {
  const params = { _id: props._ref };
  const data = await sanityFetch<ISanityDynamicCTADocument>({ query, params });

  return <RenderDynamicCTA {...data} />;
}
