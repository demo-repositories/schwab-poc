import Marquee, { TMarqueeProps } from "./marquee";
import CardDeck, { TCardDeckProps } from "./card-deck";
import QuerySet, { TQuerySetProps } from "./query-set";
import type { TSanitySEOData } from "@/lib/sanity/types";
import { groq } from "next-sanity";
import { Suspense } from "react";
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
  _key: string;
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
// PALLETTE GROQ QUERY image{...,"palette": asset->metadata.palette}}
export const query = (slug: string) =>
  groq`*[_type == "landingPage" && slug.current == '${slug}']{slug, title, summary, _id, _type, _key, seoData{...,}, components[]{..., _ref, _id, _type, image{...,"palette": asset->metadata.palette},"refType":*[_id==^._ref]._type}}`;

export default function LandingPage({ data }: TLandingPageProps) {
  const { title, slug, components, _id, _type, _key } = data[0];

  return (
    <main className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0">
      {components &&
        components.map((component, i) => {
          // if (!component || !componentLookup[component._type]) {
          //   console.log("component", component);
          //   return "No component";
          // }
          switch (component.refType[0] || component._type) {
            case "marquee":
              return <Marquee key={component._key} {...component} />;
            case "cardDeck":
              return (
                <Suspense>
                  <CardDeck key={component._key} {...component} />
                </Suspense>
              );
            case "querySet":
              return <QuerySet key={component._key} {...component} />;
            default:
              return <div key={`no-component-${i}`}>no component</div>;
          }
        })}
    </main>
  );
}
