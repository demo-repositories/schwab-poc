import { client } from "@/lib/sanity/client";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { Image } from "@unpic/react";
const builder = urlBuilder(client);

export default function SanityImage({ value }) {
  // console.log("value", value);
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      src={builder.image(value).width(width).fit("max").auto("format").url()}
      layout="constrained"
      width={width}
      height={height}
      alt={value.alt || ""}
    />
  );
}
