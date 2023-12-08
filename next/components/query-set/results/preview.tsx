"use client";
import { useQuery } from "@/lib/sanity/store";
import Spinner from "@/components/spinner";
import RenderResults from "./component";
import query from "./query";
import { vercelStegaCleanAll } from "@sanity/client/stega";
import type { TResultsDataParams } from ".";
import { Suspense } from "react";
/**
 * Client-side version of queryset component to enable Presentation in Sanity.
 *
 * Ultimately this goes in 'components/query-set/preview.tsx'.
 */

export default function PreviewResults({
  params,
}: {
  params: TResultsDataParams;
}) {
  const { contentTypes, taxonomyFilters } = params;

  const { data, loading } = useQuery(
    query,
    { contentTypes: vercelStegaCleanAll(contentTypes) },
    { initial: undefined },
  );

  return loading ? (
    <Spinner />
  ) : (
    <Suspense>
      <RenderResults results={...data} taxonomyFilters={taxonomyFilters} />
    </Suspense>
  );
}
