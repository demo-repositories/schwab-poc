import { createElement } from "react";
import Marquee from "./Marquee";
import CardDeck from "./CardDeck";

const componentLookup = {
  marquee: Marquee,
  cardDeck: CardDeck,
};
export const query = (slug: string) =>
  `*[_type == "landingPage" && slug.current == '${slug}']{slug, title, summary, components[]{..., cards[]{...,to->}, image{...,"palette": asset->metadata.palette}}}`;

export default function LandingPage({ data }) {
  const { title, slug, components } = data[0];
  // console.log("components", components[0]);
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
