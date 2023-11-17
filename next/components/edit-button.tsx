"use client";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function EditButton({ isEnabled }: { isEnabled: boolean }) {
  const pathname = usePathname();

  const [sanityInfo, setSanityInfo] = useState(null);
  useEffect(() => {
    if (isEnabled && window && document) {
      console.log("window", window);
      document.getElementsByTagName("main")[0]?.dataset?.sanity
        ? setSanityInfo(
            JSON.parse(document.getElementsByTagName("main")[0].dataset.sanity),
          )
        : setSanityInfo(null);
    }
  }, [pathname, isEnabled]);
  const typePathLookup = {
    story: "stories",
    landingPage: "landingPages",
  };
  const hrefOverride = sanityInfo
    ? new URL(
        `${process.env.NEXT_PUBLIC_SANITY_STUDIO_URL}/structure/${
          typePathLookup[sanityInfo._type]
        };${sanityInfo._id}`,
      )
    : "#";
  return (
    <>
      {isEnabled && sanityInfo && (
        <Link
          href={hrefOverride}
          target="_blank"
          className={cn(
            badgeVariants({
              variant: "default",
            }),
            "px-5 text-sm",
          )}
        >
          <ExternalLink className="mr-2" />
          &nbsp;{"Edit in Sanity"}
        </Link>
      )}
    </>
  );
}
