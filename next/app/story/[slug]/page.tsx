import { draftMode } from "next/headers";
import Story, { query, ISanityStoryDocument } from "@/components/pages/story";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { loadQuery } from "@/lib/sanity/store";
import dynamic from "next/dynamic";

const StoryPreview = dynamic(() => import("@/components/pages/story/preview"));

type Props = {
  params: { slug: string };
};

const pageData = async (slug: string) =>
  await loadQuery<ISanityStoryDocument[]>(query(slug));

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  const { data } = await pageData(slug);
  const { seoData, title, summary } = data;
  const metadata = { title, description: summary };
  if (seoData) {
    seoData.tags.forEach(({ tag, value }) => (metadata[tag] = value));
  }

  return metadata;
}

export default async function StoryPage({ params }: Props) {
  const { slug } = params;
  const initial = await pageData(slug);

  if (draftMode().isEnabled) {
    return <StoryPreview params={params} initial={initial} />;
  }
  // 404 if no document in Sanity.
  // This can be done more granularly with the app router, but for now general 404 behavior
  if (!initial.data) {
    notFound();
  }

  return <Story data={initial.data} />;
}
