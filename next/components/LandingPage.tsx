import { createElement } from "react";
import Marquee, { TMarqueeProps } from "./Marquee";
import CardDeck, { TCardDeckProps } from "./CardDeck";
/**
 * Recreation of 'Pattern Landing Page' from original charlesschwab.com.
 *
 * Maps to 'landingPage' document type in Sanity.
 */

type TLandingPageItem = {
  title: string;
  slug: string;
  components: Array<TCardDeckProps | TMarqueeProps>;
};
type TLandingPageProps = {
  data: TLandingPageItem[];
};
type TComponentType = "marquee" | "cardDeck";

// Each component's "_type" field maps to a React component
const componentLookup: Record<TComponentType, JSX.Element> = {
  marquee: Marquee,
  cardDeck: CardDeck,
};
export const query = (slug: string) =>
  `*[_type == "landingPage" && slug.current == '${slug}']{slug, title, summary, components[]{..., cards[]{...,to->}, image{...,"palette": asset->metadata.palette}}}`;

export default function LandingPage({ data }: TLandingPageProps) {
  const { title, slug, components } = data[0];
  return (
    <main className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0">
      {components &&
        components.map((component) => {
          return !componentLookup[component._type]
            ? "No component"
            : createElement(componentLookup[component._type], {
                ...component,
                key: component._id,
              });
        })}
    </main>
  );
}
