import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Image } from "@unpic/react";
import SanityImage from "./SanityImage";
import Button from "./Button";

export default function Cards({ cards }) {
  return (
    <div className="gap-4 lg:flex">
      {cards &&
        cards.map(({ _id, title, summary, featuredImage, slug }) => (
          <Card key={_id} className="basis-1/3">
            <CardHeader>
              <SanityImage value={featuredImage} height={150} />
            </CardHeader>
            <CardContent>
              <CardTitle className="">{title}</CardTitle>
              <CardDescription>{summary}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button to={{ _type: "story", slug: slug }} text="Read" />
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
