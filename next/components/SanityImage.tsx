import { client } from "@/lib/sanity/client";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { Image } from "@unpic/react";

type TSanityImageProps = {
  value: any;
  width?: number;
  height?: number;
};

const builder = urlBuilder(client);

export default function SanityImage({
  value,
  width,
  height,
}: TSanityImageProps) {
  // console.log("value", value);
  const dimensions = getImageDimensions(value);
  const { aspectRatio } = dimensions;
  if (!width && !height) {
    const { width, height } = dimensions;
  }
  if (width && !height) {
    const height = width / aspectRatio;
  }
  if (!width && height) {
    const width = height * aspectRatio;
  }
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
