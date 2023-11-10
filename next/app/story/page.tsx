import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import Stories, { query } from "@/components/Stories";
import PreviewStories from "@/components/PreviewStories";
import { sanityFetch } from "@/lib/sanity/fetch";

export default async function StoriesPage() {
  const data = await sanityFetch<number>({ query, tags: ["story"] });

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query}
      initialData={data}
      as={PreviewStories}
    >
      <Stories data={data} />
    </LiveQuery>
  );
}
