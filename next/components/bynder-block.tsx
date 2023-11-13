import { Image } from "@unpic/react";
import { Download } from "lucide-react";
import Button from "./button";
import { PortableText } from "@portabletext/react";

/**
 * Maps to the 'bynderBlock' type in Sanity.
 *
 * Gets pulled into 'CustomPortableText'
 */

export default function BynderBlock({ value }) {
  const { title, caption, bynderAsset } = value;
  const { previewImg, aspectRatio } = bynderAsset;
  const imgWidth = 400;
  const fileURL = "/"; // this doesn't come back from Sanity's test space
  return (
    <section className="mx-auto my-7 flex max-w-7xl justify-center">
      <div className="block-wrapper items-center justify-between gap-9 bg-accent p-7 md:flex">
        <Image
          src={previewImg}
          layout="constrained"
          width={imgWidth}
          height={imgWidth * aspectRatio}
          alt={"Image of file available for download"}
        />
        <div>
          <h3 className="mb-3 text-2xl font-bold tracking-tight">{title}</h3>
          {caption && (
            <PortableText
              value={caption}
              components={{
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-inside list-disc">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-inside list-decimal">{children}</ol>
                  ),
                },
              }}
            />
          )}
          <div className="text-right">
            <Button to={{ slug: { current: fileURL }, _type: "landing-page" }}>
              <Download />
              &nbsp;Download
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
