import type { TButtonProps } from "./Button";
import Button from "./Button";
import { client } from "@/lib/sanity/client";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { Image } from "@unpic/react";
import hexToRgba from "hex-to-rgba";

/**
 * Maps to 'marquee' object type in Sanity.
 *
 * This componet uses Sanity's image color palatte metadata to ensure text has proper contrast regardless of the image's color scheme.
 *
 * Appears in 'LandingPage' in the component lookup.
 */

export type TMarqueeProps = {
  _id: string;
  title: string;
  description: string;
  eyebrow?: string;
  image: any;
  buttons: TButtonProps[];
};

const builder = urlBuilder(client);

export default function Marquee({
  title,
  description,
  eyebrow,
  image,
  buttons,
}: TMarqueeProps) {
  const { width } = getImageDimensions(image);
  const {
    palette: { dominant },
  } = image;

  return (
    <section className="relative">
      <div className="text-wrapper absolute flex h-full w-full items-center">
        <div className="px-12">
          {eyebrow && (
            <strong
              className="mb-1 block uppercase"
              style={{ color: dominant.foreground }} // Dark/light theme will override tailwind colors
            >
              {eyebrow}
            </strong>
          )}
          {title && (
            <h1
              className={"max-w-[21ch] text-4xl font-bold tracking-tight"}
              style={{ color: dominant.foreground }} // Dark/light theme will override tailwind colors
            >
              {title}
            </h1>
          )}
          {description && (
            <p
              className={"mb-5 mt-1 max-w-[37ch] text-lg"}
              style={{ color: dominant.foreground }} // Dark/light theme will override tailwind colors
            >
              {description}
            </p>
          )}
          <div className="flex gap-3">
            {buttons &&
              buttons.map((button) => {
                return (
                  <Button
                    key={button._id}
                    colorOverride={{
                      background: dominant.foreground,
                      foreground: dominant.background,
                    }}
                    {...button}
                  />
                );
              })}
          </div>
        </div>
      </div>
      {/* Gradient between image and text. Uses Sanity's image metadata to get a color that matches the image.*/}
      <div
        className="gradient"
        style={{
          backgroundColor: hexToRgba(dominant.background),
          background: `linear-gradient(90deg, ${hexToRgba(
            dominant.background,
          )} 0%, rgba(0,0,0,0) 90%)`,
        }}
      >
        <div className="image-wrapper" style={{ zIndex: -1 }}>
          <Image
            src={builder
              .image(image)
              .width(width)
              .fit("max")
              .auto("format")
              .url()}
            layout="fullWidth"
            height={600}
            alt={image.alt || ""}
            className="relative -z-10"
          />
        </div>
      </div>
    </section>
  );
}
