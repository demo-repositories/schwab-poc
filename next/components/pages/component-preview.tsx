"use client";

import { groq } from "next-sanity";
import { useQuery } from "@/lib/sanity/store";
import PreviewCardDeck from "../card-deck/preview";
import { PageParams } from "./types";
import { ISanityDocument } from "@/lib/sanity/types";
import Spinner from "../spinner";
import PreviewQuerySet from "../query-set/preview";
import { Suspense } from "react";
import PreviewDataTable from "../data-table/preview";
import PreviewDynamicCTA from "../dynamic-cta/preview";
import PreviewBynderBlock from "../bynder-block/preview";

export const query = groq`*[_id==$_id][0]{...,_type}`;

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
  if (!data) {
    return (
      <div className="flex items-center justify-center">
        <div>Something is not quite right</div>
      </div>
    );
  }

  const { _type, _id } = data;
  return (
    <section className="mx-auto max-w-7xl">
      <Suspense>
        {_type === "cardDeck" && <PreviewCardDeck {...{ _ref: _id }} />}
        {_type === "querySet" && <PreviewQuerySet {...{ _ref: _id }} />}
        {_type === "dataTable" && <PreviewDataTable {...{ _ref: _id }} />}
        {_type === "dynamicCta" && <PreviewDynamicCTA {...{ _ref: _id }} />}
        {_type === "bynderBlock" && <PreviewBynderBlock {...{ _ref: _id }} />}
      </Suspense>
    </section>
  );
}
