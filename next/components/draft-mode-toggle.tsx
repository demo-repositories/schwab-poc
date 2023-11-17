"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import EditButton from "./edit-button";
import { cn } from "@/lib/utils";
/**
 * Hits API endpoints to toggle Next+Sanity's draft mode
 *
 * Appears in 'Footer'
 */
export default function DraftModeToggle({ isEnabled }: { isEnabled: boolean }) {
  const [draftEnabled, setDraftEnabled] = useState(isEnabled);
  const pathname = usePathname();
  const linkHref = draftEnabled
    ? `/api/disable-draft?path=${pathname}`
    : `/api/draft?secret=MY_SECRET_TOKEN&path=${pathname}`;

  return (
    <>
      {/* {draftEnabled && <EditButton isEnabled={draftEnabled} />} */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={linkHref}
              className={cn(
                badgeVariants({
                  variant: draftEnabled ? "default" : "outline",
                }),
                "px-5 py-1 text-sm",
              )}
              prefetch={false}
              onClick={(e) => setDraftEnabled(!draftEnabled)} // hacky workaround to keep state accurate when the server component doesn't refresh
            >
              {`Preview mode is ${draftEnabled ? "on" : "off"}`}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{`${draftEnabled ? "Disable" : "Enable"} preview mode`}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
