import IconCard from "./icon-card";
import CTACard from "./cta-card";
import { loadQuery } from "@/lib/sanity/store";
import { vercelStegaCleanAll } from "@sanity/client/stega";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { groq } from "next-sanity";
// import { draftMode } from "next/headers";
import dynamic from "next/dynamic";
const PreviewCardDeck = dynamic(() => import("@/components/preview-card-deck"));

/**
 * Maps to the 'cardDeck' object type in Sanity, which appears in the 'landingPage' type.
 *
 * Ultimately is imported into 'LandingPage'
 */

type TCard = {
  title?: string;
  body: string;
  icon?: any;
  to: any;
  _key: string;
};
export type TCardDeckProps = {
  title?: string;
  cardType: "ctaCard" | "iconCard";
  ctaText: string;
  _id: string;
  _key: string;
  _type: "cardDeck";
  cards: TCard[];
};
const componentData = async (params: string) =>
  await loadQuery<TCardDeckProps>(query, params);

export function CardDeckPortableText({ value }) {
  const components: PortableTextComponents = {
    marks: {
      sup: ({ children }) => <sup>{children}</sup>,
    },
    block: {
      sup: ({ children }) => <sup>{children}</sup>,
    },
  };
  return <PortableText value={value} components={components} />;
}
export function RenderCardDeck({ data }) {
  const { title, cardType, ctaText, cards } = data;
  return (
    <section className="mx-auto max-w-7xl flex-row items-center p-7">
      <div className="text-wrapper my-3">
        {title && (
          <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
        )}
      </div>
      <div className="cards-wrapper grid auto-rows-fr grid-cols-3 gap-3">
        {cards &&
          cards.map((card) => {
            switch (vercelStegaCleanAll(cardType)) {
              case "iconCard":
                return <IconCard key={card._key} {...card} />;
              case "ctaCard":
                return <CTACard key={card._key} {...card} ctaText={ctaText} />;
              default:
                console.log("Card type not found");
                return null;
            }
          })}
      </div>
    </section>
  );
}
export const query = groq`*[_type == "cardDeck" && _id == $_id]{...,}`;
export default async function CardDeck(props: TCardDeckProps) {
  const params = { _id: props._ref };
  const initial = await componentData(params);
  // if (draftMode().isEnabled) {
  //   return <PreviewCardDeck params={params} initial={initial} />;
  // }
  return <RenderCardDeck data={initial.data[0]} />;
}
