"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Spinner from "@/components/spinner";
import { RenderCardDeck } from "./component";
import { CARD_DECK_QUERY } from "@/sanity/lib/queries";
import type { CARD_DECK_QUERYResult } from "@/sanity/types";

/**
 * Ultimately this goes in 'preview-landing-page.tsx'
 */

export default function PreviewCardDeck({
  initial,
}: {
  initial: QueryResponseInitial<CARD_DECK_QUERYResult>;
}) {
  console.log("initial", initial);
  const params = { _id: initial._ref };

  const { data, loading } = useQuery<CARD_DECK_QUERYResult>(
    CARD_DECK_QUERY,
    params,
    { initial }
  );
  return loading ? <Spinner /> : <RenderCardDeck {...data} />;
}
