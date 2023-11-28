import RenderResults from "./component";
import { loadQuery } from "@/lib/sanity/store";
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
};
export default async function Results({
  params,
}: {
  params: TResultsDataParams;
}) {
  const { contentTypes } = params;

  const initial = await resultsData({
    contentTypes: vercelStegaCleanAll(contentTypes), // I spent like 30 minutes missing this cleanAll thing
  });
  return <RenderResults results={...initial.data} />;
}
