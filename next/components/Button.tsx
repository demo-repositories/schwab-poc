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
  text?: string;
  to: TToObject;
  hrefOverride?: URL;
  children: ReactNode;
};

export default function Button({
  text,
  to,
  hrefOverride,
  children,
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
      default:
        return `/`;
    }
  };
  return (
    <Link
      href={hrefOverride || hrefLookup(to)}
      className={buttonVariants({ variant: "default" })}
    >
      {text || children}
    </Link>
  );
}
