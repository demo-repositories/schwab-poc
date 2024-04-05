"use client";

import { LANDING_PAGE_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { LandingPageLayout } from "@/components/page/landing-page";
import { LANDING_PAGE_QUERYResult } from "@/sanity/types";
import ComponentLookupPreview from "./component-lookup-preview";

export default function LandingPagePreview({
  initial,
}: {
  initial: QueryResponseInitial<LANDING_PAGE_QUERYResult>;
}) {
  const { data } = useQuery<LANDING_PAGE_QUERYResult | null>(
    LANDING_PAGE_QUERY,
    {},
    { initial }
  );
  console.log("lp preview called");
  return data ? (
    <LandingPageLayout>
      {data?.components ? (
        <ComponentLookupPreview components={data.components} />
      ) : (
        <>No components</>
      )}
    </LandingPageLayout>
  ) : (
    <div className="bg-red-100">Loading</div>
  );
}
