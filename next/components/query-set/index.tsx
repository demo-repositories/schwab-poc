import RenderQuerySet from "./component";
import Results from "./results";
import query from "./query";
// import { loadQuery } from "@/lib/sanity/loader/loadQuery";
// import { TRenderQuerySetProps } from "./types";
import { sanityFetch } from "@/lib/sanity/fetch";

/**
 * Entry point for Queryset RSC. Fetches data + returns UI with that data.
 *
 * Ultimately is imported into 'components/pages/landing-page/index.ts'
 */

export type TQuerySetProps = {
  _ref: string;
  _key: string;
};

// Params for query
// type TComponentDataParams = {
//   _id: string;
// };

// const componentData = async (params: TComponentDataParams) =>
//   await loadQuery<TRenderQuerySetProps>(query, params);

export default async function QuerySet(props: TQuerySetProps) {
  // console.log("queryset props", props);
  const params = { _id: props._ref };
  const data = await sanityFetch({ query, params });

  const { contentTypes, taxonomyFilters } = data;

  return (
    <RenderQuerySet {...data}>
      <Results params={{ contentTypes, taxonomyFilters }} />
    </RenderQuerySet>
  );
}
