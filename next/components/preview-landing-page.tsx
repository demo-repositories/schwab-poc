"use client";
/**
 * Entrypoint for presentation to preview our app, a basic recreation of app/[slug]/page.tsx but a client component
 * Components that don't do their own data fetching can be passed the same as in the server component
 * Components that do fetch their own data need a new 'Preview' component, an example implementation would be 'PreviewCardDeck'
 */
import { useQuery } from "@/lib/sanity/store";
import LandingPage, { TLandingPageDocument, query } from "./landing-page";
import PreviewCardDeck from "./card-deck/preview";
import Marquee from "./marquee";

export default function LandingPagePreview(props) {
  const { params, initial } = props;
  const { slug } = params;
  const { data } = useQuery<TLandingPageDocument>(query(slug), params, {
    initial,
  });
  const { components } = data[0];
  return (
    <LandingPage data={data!}>
      {components &&
        components.map((component, i) => {
          switch (component.refType[0] || component._type) {
            case "marquee":
              return <Marquee key={component._key} {...component} />;
            case "cardDeck":
              return (
                <PreviewCardDeck key={component._key} params={...component} />
              );
            case "querySet":
              return <QuerySet key={component._key} {...component} />;
            default:
              console.log("component", component);
              return (
                <div key={`no-component-${i}`}>
                  No component for this type, update `preview-landing-page.tsx`
                  to fix.
                </div>
              );
          }
        })}
    </LandingPage>
  );
}
