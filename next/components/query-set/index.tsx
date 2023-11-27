import RenderQuerySet from "./component";
import Results from "./results";
import query from "./query";
import { loadQuery } from "@/lib/sanity/store";
import { TRenderQuerySetProps } from "./types";

/**
 * Entry point for Queryset RSC. Fetches data + returns UI with that data.
 *
 * Ultimately is imported into 'LandingPage'
 */

export type TQuerySetProps = {
  _ref: string;
};

// Params for query
type TComponentDataParams = {
  _id: string;
};

const componentData = async (params: TComponentDataParams) =>
  await loadQuery<TRenderQuerySetProps>(query, params);

export default async function QuerySet(props: TQuerySetProps) {
  // console.log("queryset props", props);
  const params = { _id: props._ref };
  const initial = await componentData(params);
  const { contentTypes } = initial.data;
  return (
    <RenderQuerySet {...initial.data}>
      <Results params={{ contentTypes }} />
    </RenderQuerySet>
  );
}
