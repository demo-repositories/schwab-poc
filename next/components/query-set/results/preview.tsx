"use client";
import { useQuery } from "@/lib/sanity/store";
import Spinner from "@/components/spinner";
import RenderResults from "./component";
import query from "./query";
import { vercelStegaCleanAll } from "@sanity/client/stega";

/**
 * Client-side version of queryset component to enable Presentation in Sanity.
 *
 * Ultimately this goes in 'components/query-set/preview.tsx'.
 */

export default function PreviewResults({ params }) {
  const { contentTypes } = params;

  const { data, loading } = useQuery(
    query,
    { contentTypes: vercelStegaCleanAll(contentTypes) },
    { initial: undefined },
  );

  return loading ? <Spinner /> : <RenderResults results={...data} />;
}
