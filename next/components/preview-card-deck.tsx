"use client";
import { useQuery } from "@/lib/sanity/store";
import { RenderCardDeck, query } from "./card-deck";
export default function PreviewCardDeck(props) {
  const { params, initial } = props;
  const { data } = useQuery(query, params, { initial });
  return <RenderCardDeck data={data[0]} />;
}
