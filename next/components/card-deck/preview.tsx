"use client";
import { useQuery } from "@/lib/sanity/store";
import Spinner from "@/components/spinner";
import { RenderCardDeck } from "./component";
import query from "./query";

/**
 * Ultimately this goes in 'preview-landing-page.tsx'
 */

export default function PreviewCardDeck(props) {
  const { params, initial } = props;
  const { data, loading } = useQuery(query, { _id: params._ref }, { initial });
  return loading ? <Spinner /> : <RenderCardDeck {...data[0]} />;
}
