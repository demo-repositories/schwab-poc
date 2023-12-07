import { TSanityCardDeckDocument } from "@/lib/sanity/types";
import { vercelStegaCleanAll } from "@sanity/client/stega";
import IconCard from "./cards/icon-card";
import CTACard from "./cards/cta-card";

/**
 * UI for CardDeck component
 */

export function RenderCardDeck({
  title,
  cardType,
  ctaText,
  cards,
}: TSanityCardDeckDocument) {
  return (
    <section className="mx-auto max-w-7xl flex-row items-center p-7">
      <div className="text-wrapper my-3">
        {title && (
          <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
        )}
      </div>
      <div className="cards-wrapper auto-rows-fr grid-cols-3 gap-3 md:grid">
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
