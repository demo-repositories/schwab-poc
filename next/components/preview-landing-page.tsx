"use client";

import { useQuery } from "@/lib/sanity/store";
import LandingPage, { TLandingPageItem, query } from "./landing-page";

export default function LandingPagePreview(props) {
  const { params, initial, draftMode } = props;
  const { slug } = params;
  const { data } = useQuery<TLandingPageItem>(query(slug), params, {
    initial,
  });

  return <LandingPage data={data!} draftMode={draftMode} />;
}
