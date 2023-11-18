"use client";

import { useQuery } from "@/lib/sanity/store";
import RenderCardDeck, { TCardDeckProps, query } from "./render";

export default function CardDeckPreview({ _id, initial }) {
  const { data } = useQuery<TCardDeckProps>(query(_id), undefined, {
    initial,
  });

  return <RenderCardDeck data={data[0]} />;
}
