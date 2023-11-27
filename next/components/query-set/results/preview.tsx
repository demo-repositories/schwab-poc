"use client";
import { useQuery } from "@/lib/sanity/store";
import Spinner from "@/components/spinner";
import RenderResults from "./component";
import query from "./query";
import { vercelStegaCleanAll } from "@sanity/client/stega";

/**
 * Ultimately this goes in 'query-set/index.tsx'?
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
