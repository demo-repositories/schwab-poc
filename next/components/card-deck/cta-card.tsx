import Button, { TButtonProps } from "@/components/button";
import { PortableText, PortableTextComponents } from "@portabletext/react";
/**
 * Used as a card type in 'CardDeck'. Maps to the 'card' object type in Sanity.
 */

type TIconCardProps = {
  title?: string;
  body: any[];
  ctaText: string;
  to: {
    _type: string;
    slug: {
      current: string;
    };
  };
};
const components: PortableTextComponents = {
  marks: {
    sup: ({ children }) => <sup>{children}</sup>,
  },
  block: {
    sup: ({ children }) => <sup>{children}</sup>,
  },
};
export default function CTACard({ title, body, ctaText, to }: TIconCardProps) {
  return (
    <div className="card mb-9 grid grid-rows-4 bg-schwab-blue p-5 lg:mb-0">
      <div className="text row-span-3">
        {title && <strong className="my-2 block text-xl">{title}</strong>}
        {body && (
          <div className="mb-2">
            <PortableText value={body} components={components} />
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
