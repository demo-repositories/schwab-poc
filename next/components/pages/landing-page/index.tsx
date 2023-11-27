import { PropsWithChildren } from "react";
import { TMarqueeProps } from "./marquee";
import { TCardDeckProps } from "./card-deck";
import { TQuerySetProps } from "./query-set";
import type { ISanityPageDocument } from "@/lib/sanity/types";
import { groq } from "next-sanity";

/**
 * Recreation of 'Pattern Landing Page' from original charlesschwab.com.
 *
 * Maps to 'landingPage' document type in Sanity.
 */

export interface ISanityLandingPageDocument extends ISanityPageDocument {
  components: Array<TCardDeckProps | TMarqueeProps | TQuerySetProps>;
}

export const query = (slug: string) =>
  groq`*[_type == "landingPage" && slug.current == '${slug}'][0]{slug, title, summary, _id, _type, _key, seoData{...,}, components[]{..., _ref, _id, _type, image{...,"palette": asset->metadata.palette},"refType":*[_id==^._ref]._type}}`;

// Ultimately this component is a wrapper for the blocks provided by /app/[slug]/page.tsx
export default function LandingPage({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0">
      {children}
    </main>
  );
}
