import { client } from "@/sanity/lib/client";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { Image } from "@unpic/react";
/**
 * Perhaps the component most in need of refactoring. Maps to an 'image' type in Sanity.
 *
 * Uses unpic/img and Sanity's image pipeline to render most of the images on the site.
 */
export type TSanityImageProps = {
  value: any;
  width?: number;
  height?: number;
  priority?: boolean;
  layout: "fullWidth" | "constrained" | "fixed";
};

const builder = urlBuilder(client);

export default function SanityImage({
  value,
  width,
  height,
  priority,
  layout,
}: TSanityImageProps) {
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
      layout={layout || "constrained"}
      width={width}
      height={height}
      alt={value.alt || ""}
      priority={priority}
    />
  );
}
