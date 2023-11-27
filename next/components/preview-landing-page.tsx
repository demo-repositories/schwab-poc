"use client";

import { useQuery } from "@/lib/sanity/store";
import LandingPage, { TLandingPageItem, query } from "./landing-page";
import PreviewCardDeck from "./preview-card-deck";

export default function LandingPagePreview(props) {
  const { params, initial } = props;
  const { slug } = params;
  const { data } = useQuery<TLandingPageItem>(query(slug), params, {
    initial,
  });

  return (
    <LandingPage data={data!}>
      <PreviewCardDeck params={...initial.data[0].components[1]} />
    </LandingPage>
  );
}
