import RenderBynderBlock from "./component";
import { loadQuery } from "@/lib/sanity/loader/loadQuery";
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
const componentData = async (params: TParams) =>
  await loadQuery<ISanityBynderBlockDocument>(query, params);

export default async function BynderBlock({ _ref }: { _ref: string }) {
  const params = { _id: _ref };
  const initial = await componentData(params);

  return <RenderBynderBlock {...initial.data} />;
}
