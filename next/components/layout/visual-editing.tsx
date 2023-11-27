"use client";
/**
 * Helper component loaded in layout.tsx to provide info to 'Presentation' tool
 */
import { STUDIO_ORIGIN, useLiveMode } from "@/lib/sanity/store";
import {
  HistoryAdapter,
  HistoryAdapterNavigate,
  enableOverlays,
} from "@sanity/overlays";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";

export function VisualEditing() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routerRef = useRef(router);
  const navigateRef = useRef<HistoryAdapterNavigate>();

  routerRef.current = router;

  const history: HistoryAdapter = useMemo(
    () => ({
      subscribe(navigate) {
        navigateRef.current = navigate;
        return () => {
          navigateRef.current = undefined;
        };
      },
      update(update) {
        switch (update.type) {
          case "push":
            return routerRef.current.push(update.url);
          case "pop":
            return routerRef.current.back();
          case "replace":
            return routerRef.current.replace(update.url);
          default:
            throw new Error(`Unknown update type: ${update.type}`);
        }
      },
    }),
    [],
  );

  useEffect(
    () =>
      enableOverlays({
        allowStudioOrigin: STUDIO_ORIGIN,
        history,
      }),
    [history],
  );

  useEffect(() => {
    navigateRef.current?.({
      type: "push",
      url: `${pathname}${searchParams?.size ? `?${searchParams}` : ""}`,
    });
  }, [pathname, searchParams]);

  useLiveMode({ allowStudioOrigin: STUDIO_ORIGIN });

  return null;
}
