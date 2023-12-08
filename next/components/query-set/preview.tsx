"use client";
import { useQuery } from "@/lib/sanity/store";
import Spinner from "@/components/spinner";
import RenderQuerySet from "./component";
import query from "./query";
import PreviewResults from "./results/preview";

/**
 * Client component to enable Presentation in Sanity
 *
 * Ultimately this goes in 'components/pages/landing-page/preview.tsx'
 */

export default function PreviewQuerySet(props) {
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
      <PreviewResults
        params={{
          contentTypes: data.contentTypes,
          taxonomyFilters: data.taxonomyFilters,
        }}
      />
    </RenderQuerySet>
  );
}
