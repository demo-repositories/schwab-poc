import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SanityImage from "./sanity-image";
import Button from "./button";

/**
 * Used in both document type list pages to show the available documents.
 */

type TDocumentCards = {
  _id: string;
  title: string;
  summary: string;
  featuredImage: any;
  slug: {
    current: string;
  };
  _type: string;
};
export default function DocumentCards({ cards }: { cards: TDocumentCards[] }) {
  const gridCols = cards.length >= 4 ? `grid-cols-4` : `grid-cols-3`;
  return (
    <div className={`my-4 auto-rows-fr ${gridCols} gap-4 lg:grid`}>
      {cards &&
        cards.map(({ _id, title, summary, featuredImage, slug, _type }) => (
          <Card key={_id} className="mb-4 grid-rows-2 gap-0 lg:mb-0 lg:grid">
            <CardHeader>
              <SanityImage value={featuredImage} height={150} layout="fixed" />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{title}</CardTitle>
              <CardDescription>{summary}</CardDescription>
            </CardContent>
            <CardFooter>
              <div className="w-full text-right">
                <Button to={{ _type: _type, slug: slug }} text="Read" />
              </div>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
