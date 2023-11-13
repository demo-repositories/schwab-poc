import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import Story, { query } from "@/components/Story";
import PreviewStory from "@/components/PreviewStory";
import { sanityFetch } from "@/lib/sanity/fetch";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

const pageData = async (slug: string) =>
  await sanityFetch<number>({
    query: query(slug),
    tags: ["story"],
  });

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  const data = await pageData(slug);
  const { seoData, title, summary } = data[0];
  const metadata = { title, description: summary };
  if (seoData) {
    seoData.tags.forEach(({ tag, value }) => (metadata[tag] = value));
  }

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return metadata;
}

export default async function StoryPage({ params }: Props) {
  const { slug } = params;
  const data = await pageData(slug);

  // 404 if no document in Sanity.
  // This can be done more granularly with the app router, but for now general 404 behavior
  if (typeof data === "undefined") {
    return notFound();
  }

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
