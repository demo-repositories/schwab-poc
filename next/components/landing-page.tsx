import { createElement } from "react";
import Marquee, { TMarqueeProps } from "./marquee";
import CardDeck, { TCardDeckProps } from "./card-deck";
import QuerySet, { TQuerySetProps } from "./query-set";
import type { TSanitySEOData } from "@/lib/sanity/types";
/**
 * Recreation of 'Pattern Landing Page' from original charlesschwab.com.
 *
 * Maps to 'landingPage' document type in Sanity.
 */

export type TLandingPageItem = {
  title: string;
  summary?: string;
  slug: string;
  seoData: TSanitySEOData;
  _id: string;
  _type: string;
  components: Array<TCardDeckProps | TMarqueeProps | TQuerySetProps>;
};
export type TLandingPageProps = {
  data: TLandingPageItem[];
};
type TComponentType = "marquee" | "cardDeck";

// Each component's "_type" field maps to a React component
const componentLookup: Record<TComponentType, JSX.Element> = {
  marquee: Marquee,
  cardDeck: CardDeck,
  querySet: QuerySet,
};
export const query = (slug: string) =>
  `*[_type == "landingPage" && slug.current == '${slug}']{slug, title, summary, _id, _type, components[]{..., cards[]{...,to->}, image{...,"palette": asset->metadata.palette}}}`;

export default function LandingPage({ data }: TLandingPageProps) {
  const { title, slug, components, _id, _type } = data[0];
  return (
    <main
      className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0"
      data-sanity={JSON.stringify({ _id, _type })}
    >
      {components &&
        components.map((component) => {
          return !componentLookup[component._type] ? (
            "No component"
          ) : (
            <div key={component._id}>
              {createElement(componentLookup[component._type], {
                ...component,
                key: component._id,
              })}
            </div>
          );
        })}
    </main>
  );
}
