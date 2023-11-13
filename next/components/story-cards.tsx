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

export default function Cards({ cards }) {
  return (
    <div className="gap-4 lg:flex">
      {cards &&
        cards.map(({ _id, title, summary, featuredImage, slug, _type }) => (
          <Card key={_id} className="basis-1/3">
            <CardHeader className="mb-3 max-h-[150px] overflow-hidden">
              <SanityImage value={featuredImage} height={150} />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{title}</CardTitle>
              <CardDescription>{summary}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button to={{ _type: _type, slug: slug }} text="Read" />
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
