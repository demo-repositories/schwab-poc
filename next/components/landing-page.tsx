import { TMarqueeProps } from "./marquee";
import { TCardDeckProps } from "./card-deck";
import { TQuerySetProps } from "./query-set";
import type { TSanitySEOData } from "@/lib/sanity/types";
import { groq } from "next-sanity";
import { PropsWithChildren } from "react";
/**
 * Recreation of 'Pattern Landing Page' from original charlesschwab.com.
 *
 * Maps to 'landingPage' document type in Sanity.
 */

export type TLandingPageDocument = {
  title: string;
  summary?: string;
  slug: string;
  seoData: TSanitySEOData;
  _id: string;
  _type: string;
  _key: string;
  components: Array<TCardDeckProps | TMarqueeProps | TQuerySetProps>;
};

export const query = (slug: string) =>
  groq`*[_type == "landingPage" && slug.current == '${slug}']{slug, title, summary, _id, _type, _key, seoData{...,}, components[]{..., _ref, _id, _type, image{...,"palette": asset->metadata.palette},"refType":*[_id==^._ref]._type}}`;

// Ultimately this component is a wrapper for the blocks provided by /app/[slug]/page.tsx
export default function LandingPage({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0">
      {children}
    </main>
  );
}
