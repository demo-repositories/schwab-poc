import { loadQuery } from "@/lib/sanity/loader/loadQuery";
import { TSanityCardDeckDocument } from "@/lib/sanity/types";
import query from "./query";
import { RenderCardDeck } from "./component";

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
type TParams = {
  _id: string;
};
const componentData = async (params: TParams) =>
  await loadQuery<TSanityCardDeckDocument>(query, params);

export default async function CardDeck(props: TCardDeckProps) {
  const params = { _id: props._ref };
  const initial = await componentData(params);

  return <RenderCardDeck {...initial.data} />;
}
