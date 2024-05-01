import query from "./query";
import { RenderCardDeck } from "./component";
import { sanityFetch } from "@/lib/sanity/fetch";

/**
 * Entry point for Card deck RSC. Fetches data + returns UI with that data.
 *
 * Ultimately is imported into 'LandingPage'
 */

export type TCardDeckProps = {
  _ref: string;
  _key: string;
  _refType?: string[];
};

// Params for query
// type TParams = {
//   _id: string;
// };

export default async function CardDeck(props: TCardDeckProps) {
  const params = { _id: props._ref };
  const data = await sanityFetch({ query, params });

  return <RenderCardDeck {...data} />;
}
