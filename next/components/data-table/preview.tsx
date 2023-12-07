"use client";
import { useQuery } from "@/lib/sanity/store";
import Spinner from "@/components/spinner";
import RenderDataTable from "./component";
import query from "./query";
import { ISanityDataTableDocument } from ".";
import { Suspense } from "react";
/**
 * Ultimately this goes in 'components/pages/story/reference-resolver/preview'
 */

export default function PreviewDataTable(props: { _ref: string }) {
  const { _ref } = props;
  const { data, loading } = useQuery<ISanityDataTableDocument>(
    query,
    { _id: _ref },
    { initial: undefined },
  );
  return loading ? (
    <Spinner />
  ) : (
    <Suspense>
      <RenderDataTable {...data} />
    </Suspense>
  );
}
