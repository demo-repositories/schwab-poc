import SanityImage from "@/components/sanity-image";
import CardDeckPortableText from "../portable-text";
import { TSanityCard } from "@/lib/sanity/types";
/**
 * Used as a card type in 'CardDeck'. Maps to the 'card' object type in Sanity.
 */

type TIconCardProps = Pick<TSanityCard, "title" | "body" | "icon">;

export default function IconCard({ title, body, icon }: TIconCardProps) {
  return (
    <div className="card mb-9 text-center lg:mb-0 lg:basis-[33%]">
      {icon && (
        <div className="icon-wrapper flex justify-center">
          <SanityImage
            value={icon}
            // width={100}
            // height={100}
            layout="fixed"
          />
        </div>
      )}
      {title && <strong className="mb-2 mt-4 block">{title}</strong>}
      {body && <CardDeckPortableText value={body} />}
    </div>
  );
}
