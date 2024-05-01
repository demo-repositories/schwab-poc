import RenderResults from "./component";
import query from "./query";
import { vercelStegaCleanAll } from "@sanity/client/stega";
import { sanityFetch } from "@/lib/sanity/fetch";
/**
 * Entry point for list of results from queryset parameters
 */

export type TResultsDataParams = {
  contentTypes: string[];
  taxonomyFilters?: any[];
};
export default async function Results({
  params,
}: {
  params: TResultsDataParams;
}) {
  // console.log("praram", params);
  const { contentTypes, taxonomyFilters } = params;
  // console.log("taxonomyFilters", taxonomyFilters[0].taxonomyAttribute);
  const attributes = taxonomyFilters?.map(
    ({ taxonomyAttribute }) => taxonomyAttribute._id,
  );

  const data = await sanityFetch({
    query,
    params: {
      contentTypes: vercelStegaCleanAll(contentTypes),
      taxonomyFilters: vercelStegaCleanAll(attributes),
    },
  });

  return (
    <RenderResults results={[...data]} taxonomyFilters={taxonomyFilters} />
  );
}
