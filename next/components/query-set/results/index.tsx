import RenderResults from "./component";
import query from "./query";
import { vercelStegaCleanAll } from "@sanity/client/stega";
import { sanityFetch } from "@/lib/sanity/fetch";
import { ITaxonomyItem } from "@/lib/sanity/types";
/**
 * Entry point for list of results from queryset parameters
 */

export type TResultsDataParams = {
  taxonomyFilters: ITaxonomyItem[];
  contentTypes: string[];
};
export default async function Results({
  params,
}: {
  params: TResultsDataParams;
}) {
  const { contentTypes, taxonomyFilters } = params;
  // console.log("taxonomyFilters", taxonomyFilters);
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
