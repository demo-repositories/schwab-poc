import RenderDynamicCTA from "./component";
import { loadQuery } from "@/lib/sanity/store";
import { TButtonProps } from "@/components/button";
import query from "./query";
/**
 * Maps to the 'dynamicCta' object type in Sanity.
 *
 * Gets pulled into 'CustomPortableText'
 */
type TDynamicCTAProps = {
  value: {
    heading: string;
    button: TButtonProps;
  };
};
// Params for query
type TParams = {
  _id: string;
};
type TSanityDynamicCTADocument = any;
const componentData = async (params: TParams) =>
  await loadQuery<TSanityDynamicCTADocument>(query, params);

export default async function DynamicCTA(props) {
  const params = { _id: props._ref };
  const initial = await componentData(params);

  return <RenderDynamicCTA {...initial.data} />;
}
