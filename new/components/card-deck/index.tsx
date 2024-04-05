import { loadQuery } from "@/sanity/lib/store";
import { CARD_DECK_QUERY } from "@/sanity/lib/queries";
import { RenderCardDeck } from "./component";
import { CARD_DECK_QUERYResult } from "@/sanity/types";
import { draftMode } from "next/headers";
import PreviewCardDeck from "./preview";

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
// const componentData = async (params: TParams) =>
//   await loadQuery<TSanityCardDeckDocument>(query, params);

export default async function CardDeck(props: TCardDeckProps) {
  console.log("where am I");
  const params = { _id: props._ref };
  const initial = await loadQuery<CARD_DECK_QUERYResult>(
    CARD_DECK_QUERY,
    params,
    {
      perspective: "published",
      // perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <PreviewCardDeck {...initial} />
  ) : (
    <RenderCardDeck {...initial.data} />
  );
  // return <RenderCardDeck {...initial.data} />;
}
