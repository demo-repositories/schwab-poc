import RenderQuerySet from "./component";
import Results from "./results";
import query from "./query";

import { sanityFetch } from "@/lib/sanity/fetch";
import { SanityDocument } from "next-sanity";
// import { ITaxonomyItem } from "@/lib/sanity/types";
import { IRenderQuerySetProps } from "./types";
/**
 * Entry point for Queryset RSC. Fetches data + returns UI with that data.
 *
 * Ultimately is imported into 'components/pages/landing-page/index.ts'
 */

export type TQuerySetProps = {
  _ref: string;
  _key: string;
};
interface ISanityQuerySetDocument
  extends SanityDocument,
    IRenderQuerySetProps {}

export default async function QuerySet(props: TQuerySetProps) {
  // console.log("queryset props", props);
  const params = { _id: props._ref };
  const data = await sanityFetch<ISanityQuerySetDocument>({ query, params });

  const { contentTypes, taxonomyFilters } = data;

  return (
    <RenderQuerySet {...data}>
      <Results params={{ contentTypes, taxonomyFilters }} />
    </RenderQuerySet>
  );
}
