import IconCard from "./icon-card";
import CTACard from "./cta-card";
import { groq } from "next-sanity";
import { vercelStegaCleanAll } from "@sanity/client/stega";
import { PortableText, PortableTextComponents } from "@portabletext/react";

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
export const query = (_id: string) =>
  `*[_type == "cardDeck" && _id == "${_id}"]{...,}`;
export default function RenderCardDeck(props: TCardDeckProps) {
  const { title, cardType, ctaText, cards } = props;
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
