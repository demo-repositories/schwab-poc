import { groq } from "next-sanity";
import CardDeck from "@/components/card-deck";
import { PageParams } from "./types";
import { ISanityDocument } from "@/lib/sanity/types";
import { Suspense } from "react";
import BynderBlock from "../bynder-block";
import { sanityFetch } from "@/lib/sanity/fetch";
import QuerySet from "@/components/query-set";
import DataTable from "@/components/data-table";
import DynamicCTA from "@/components/dynamic-cta";

export const query = groq`*[_id==$_id][0]{...,_type}`;

export default async function ComponentPreview({ params }: PageParams) {
  const data = await sanityFetch<ISanityDocument>({ query, params });

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
        {_type === "cardDeck" && <CardDeck {...{ _ref: _id }} />}
        {_type === "querySet" && <QuerySet {...{ _ref: _id }} />}
        {_type === "dataTable" && <DataTable {...{ _ref: _id }} />}
        {_type === "dynamicCta" && <DynamicCTA {...{ _ref: _id }} />}
        {_type === "bynderBlock" && <BynderBlock {...{ _ref: _id }} />}
      </Suspense>
    </section>
  );
}
