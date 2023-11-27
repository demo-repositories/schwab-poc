"use client";
import { useQuery } from "@/lib/sanity/store";
import { RenderCardDeck, query } from "./card-deck";
export default function PreviewCardDeck(props) {
  const { params, initial } = props;
  const { data, loading } = useQuery(query, { _id: params._ref }, { initial });
  return loading ? "loading" : <RenderCardDeck data={data[0]} />;
}
