import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import Story, { query } from "@/components/Story";
import PreviewStory from "@/components/PreviewStory";
import { sanityFetch } from "@/lib/sanity/fetch";

export default async function StoryPage({ params }) {
  const { slug } = params;
  //   console.log("slug", slug);
  const data = await sanityFetch<number>({
    query: query(slug),
    tags: ["story"],
  });

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query(slug)}
      initialData={data}
      as={PreviewStory}
    >
      <Story data={data} />
    </LiveQuery>
  );
}
