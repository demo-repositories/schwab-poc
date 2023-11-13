"use client";
import { MouseEvent } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import gsap from "gsap";

/**
 * The 'Button' component is designed to map to the 'button' object type in Sanity.
 * IE If the 'button' object is used as a field you should be able to pass it directly to this component.
 *
 * There is an additional `colorOverride` prop not exposed in Sanity for hard-coding the button colors.
 */

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

  /**
   * GSAP animation on hover
   */
  const onEnter = ({ currentTarget }: MouseEvent) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }: MouseEvent) => {
    gsap.to(currentTarget, { scale: 1 });
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
      onMouseEnter={(e) => onEnter(e)}
      onMouseLeave={(e) => onLeave(e)}
    >
      {text || children}
    </Link>
  );
}
