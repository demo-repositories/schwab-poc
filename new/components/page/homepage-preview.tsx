"use client";

import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import HomePage from "@/components/page/homepage";
import { HOMEPAGE_QUERYResult } from "@/sanity/types";

export default function HomePagePreview({
  initial,
}: {
  initial: QueryResponseInitial<HOMEPAGE_QUERYResult>;
}) {
  const { data } = useQuery<HOMEPAGE_QUERYResult | null>(
    HOMEPAGE_QUERY,
    {},
    { initial }
  );

  return data ? (
    <HomePage page={data} />
  ) : (
    <div className="bg-red-100">Loading</div>
  );
}
