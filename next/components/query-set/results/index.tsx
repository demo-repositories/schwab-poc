import RenderResults from "./component";
import { loadQuery } from "@/lib/sanity/loader/loadQuery";
import query from "./query";
import { vercelStegaCleanAll } from "@sanity/client/stega";
import type { TResult } from "./component";
/**
 * Entry point for list of results from queryset parameters
 */
const resultsData = async (params: TResultsDataParams) => {
  return await loadQuery<TResult[]>(query, params);
};
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

  const initial = await resultsData({
    contentTypes: vercelStegaCleanAll(contentTypes),
    taxonomyFilters: vercelStegaCleanAll(attributes),
  });

  return (
    <RenderResults
      results={[...initial.data]}
      taxonomyFilters={taxonomyFilters}
    />
  );
}
