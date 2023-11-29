"use client";
import { useQuery } from "@/lib/sanity/store";
import Spinner from "@/components/spinner";
import RenderBynderBlock from "./component";
import query from "./query";

/**
 * Ultimately this goes in 'preview-landing-page.tsx'
 */

export default function PreviewBynderBlock(props) {
  const { _ref } = props;
  const { data, loading } = useQuery(
    query,
    { _id: _ref },
    { initial: undefined },
  );
  return loading ? <Spinner /> : <RenderBynderBlock {...data} />;
}
