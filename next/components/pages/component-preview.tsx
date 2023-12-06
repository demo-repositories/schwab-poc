"use client";

import { groq } from "next-sanity";
import { useQuery } from "@/lib/sanity/store";
import PreviewCardDeck from "../card-deck/preview";
import { PageParams } from "./types";
import { ISanityDocument } from "@/lib/sanity/types";
import Spinner from "../spinner";
import PreviewQuerySet from "../query-set/preview";
import { Suspense } from "react";
export const query = groq`*[_id==$id][0]{...,_type}`;
export default function ComponentPreview({ params }: PageParams) {
  const { data, loading } = useQuery<ISanityDocument>(query, params);
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div>
          <Spinner />
          Loading component...
        </div>
      </div>
    );
  }
  //   console.log("data", data);
  const { _type, _id } = data;
  return (
    <section className="mx-auto max-w-7xl">
      <Suspense>
        {_type === "cardDeck" && <PreviewCardDeck {...{ _ref: _id }} />}
        {_type === "querySet" && <PreviewQuerySet {...{ _ref: _id }} />}
      </Suspense>
    </section>
  );
}
