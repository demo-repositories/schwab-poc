import RenderDynamicCTA from "./component";
import { loadQuery } from "@/lib/sanity/store";
import { TButtonProps } from "@/components/button";
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
interface ISanityDynamicCTADocument extends ISanityDocument {
  heading: string;
  button: TButtonProps;
}
const componentData = async (params: TParams) =>
  await loadQuery<ISanityDynamicCTADocument>(query, params);

export default async function DynamicCTA({ _ref }: { _ref: string }) {
  const params = { _id: _ref };
  const initial = await componentData(params);

  return <RenderDynamicCTA {...initial.data} />;
}
