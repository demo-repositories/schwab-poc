"use client";
import { useQuery } from "@/lib/sanity/store";
import Spinner from "@/components/spinner";
import RenderDataTable from "./component";
import query from "./query";
import { ISanityDataTableDocument } from ".";
/**
 * Ultimately this goes in 'components/pages/story/reference-resolver/preview'
 */

export default function PreviewBynderBlock(props) {
  const { _ref } = props;
  const { data, loading } = useQuery<ISanityDataTableDocument>(
    query,
    { _id: _ref },
    { initial: undefined },
  );
  return loading ? <Spinner /> : <RenderDataTable {...data} />;
}
