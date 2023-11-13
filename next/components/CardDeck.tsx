import IconCard from "./IconCard";
import CTACard from "./CTACard";
type TCard = {
  title?: string;
  body: string;
  icon?: any;
  to: any;
};
type TCardDeckProps = {
  title?: string;
  cardType: string;
  ctaText: string;
  cards: TCard[];
};

export default function CardDeck({
  title,
  cardType,
  cards,
  ctaText,
}: TCardDeckProps) {
  //   console.log("title", title);
  //   console.log("cardType", cardType);
  console.log("cards", cards);
  return (
    <section className="mx-auto max-w-7xl flex-row items-center p-7">
      <div className="text-wrapper my-3">
        {title && (
          <h1 className="text-2xl font-extrabold tracking-tight">{title}</h1>
        )}
      </div>
      <div className="cards-wrapper justify-between gap-3 lg:flex">
        {cards.map((card) => {
          switch (cardType) {
            case "iconCard":
              return <IconCard {...card} />;
            case "ctaCard":
              return <CTACard {...card} ctaText={ctaText} />;
            default:
              console.log("Card type not found");
              return null;
          }
        })}
      </div>
    </section>
  );
}
