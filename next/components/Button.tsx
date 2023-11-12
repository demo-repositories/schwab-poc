import Link from "next/link";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";

type TToObject = {
  _type: string;
  slug: {
    current: string;
  };
};
export type TButtonProps = {
  _id?: string;
  text?: string;
  to: TToObject;
  hrefOverride?: URL;
  children?: ReactNode;
  colorOverride?: {
    background: string;
    foreground: string;
  };
};

export default function Button({
  text,
  to,
  hrefOverride,
  children,
  colorOverride,
}: TButtonProps) {
  /**
   * Map content types to their full URL based on paths in /app
   * Eventually if being used outside this button should probably go in /lib
   */
  const hrefLookup = (to: TToObject) => {
    const { _type, slug } = to;

    switch (_type) {
      case "story":
        return `/story/${slug.current}`;
      case "landingPage":
        return `/${slug.current}`;
      default:
        return `/`;
    }
  };
  return (
    <Link
      href={hrefOverride || hrefLookup(to)}
      className={buttonVariants({ variant: "default" })}
      style={
        colorOverride
          ? {
              backgroundColor: colorOverride.background,
              color: colorOverride.foreground,
            }
          : {}
      }
    >
      {text || children}
    </Link>
  );
}
