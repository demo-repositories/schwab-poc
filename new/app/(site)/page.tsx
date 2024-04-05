import { draftMode } from "next/headers";
import HomePage from "@/components/page/homepage";
import HomePagePreview from "@/components/page/homepage-preview";
import { loadQuery } from "@/sanity/lib/store";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import { HOMEPAGE_QUERYResult } from "@/sanity/types";

export default async function Page() {
  const initial = await loadQuery<HOMEPAGE_QUERYResult>(
    HOMEPAGE_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <HomePagePreview initial={initial} />
  ) : (
    <HomePage page={initial.data} />
  );
}
