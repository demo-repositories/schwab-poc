import { createElement } from "react";
import Marquee from "./Marquee";

const componentLookup = {
  marquee: Marquee,
};
export const query = (slug: string) =>
  `*[_type == "landingPage" && slug.current == '${slug}']{slug, title, components[]{...,image{...,"palette": asset->metadata.palette}}}`;

export default function LandingPage({ data }) {
  const { title, slug, components } = data[0];
  // console.log("components", components[0]);
  return (
    <main className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0">
      {components &&
        components.map((component) =>
          createElement(componentLookup[component._type], component),
        )}
    </main>
  );
}
