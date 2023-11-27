"use client";
import { useQuery } from "@/lib/sanity/store";
import Spinner from "@/components/spinner";
import RenderQuerySet from "./component";
import query from "./query";
import PreviewResults from "./results/preview";

/**
 * Ultimately this goes in 'preview-landing-page.tsx'
 */

export default function PreviewQuerySet(props) {
  console.log("preview props", props);
  const { _ref } = props;
  const { data, loading } = useQuery(
    query,
    { _id: _ref },
    { initial: undefined },
  );
  return loading ? (
    <Spinner />
  ) : (
    <RenderQuerySet {...data}>
      <PreviewResults params={{ contentTypes: data.contentTypes }} />
    </RenderQuerySet>
  );
}
