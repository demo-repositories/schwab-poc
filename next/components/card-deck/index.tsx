import query from "./query";
import { RenderCardDeck } from "./component";
import { sanityFetch } from "@/lib/sanity/fetch";
import { TSanityCardDeckDocument } from "@/lib/sanity/types";

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

export default async function CardDeck(props: { _ref: string }) {
  const params = { _id: props._ref };
  const data = await sanityFetch<TSanityCardDeckDocument>({ query, params });

  return <RenderCardDeck {...data} />;
}
