import Button from "@/components/button";
import CardDeckPortableText from "../portable-text";
import { TSanityCard } from "@/lib/sanity/types";
/**
 * Used as a card type in 'CardDeck'. Maps to the 'card' object type in Sanity.
 */

interface TIconCardProps extends TSanityCard {
  ctaText: string;
}

export default function CTACard({ title, body, ctaText, to }: TIconCardProps) {
  return (
    <div className="card mb-9 grid grid-rows-4 bg-schwab-blue p-5 lg:mb-0">
      <div className="text row-span-3">
        {title && <strong className="my-2 block text-xl">{title}</strong>}
        {body && (
          <div className="mb-2">
            <CardDeckPortableText value={body} />
          </div>
        )}
      </div>
      {to && (
        <div className="row-span-1">
          <Button to={to} text={ctaText} />
        </div>
      )}
    </div>
  );
}
