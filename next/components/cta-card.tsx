import Button, { TButtonProps } from "./button";

/**
 * Used as a card type in 'CardDeck'. Maps to the 'card' object type in Sanity.
 */

type TIconCardProps = {
  title?: string;
  body: string;
  ctaText: string;
  to: {
    _type: string;
    slug: {
      current: string;
    };
  };
};

export default function CTACard({ title, body, ctaText, to }: TIconCardProps) {
  return (
    <div className="card bg-schwab-blue mb-9 p-5 lg:mb-0 lg:basis-[34%]">
      {title && <strong className="my-2 block">{title}</strong>}
      {body && <p className="mb-3">{body}</p>}
      {to && <Button to={to} text={ctaText} />}
    </div>
  );
}