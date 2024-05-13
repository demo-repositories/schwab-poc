import Story, { query } from "@/components/pages/story";
import CustomPortableText from "@/components/pages/story/custom-portable-text";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageParams } from "@/components/pages/types";
import { sanityFetch } from "@/lib/sanity/fetch";
import { SanityDocument } from "next-sanity";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  params.slug = decodeURIComponent(params.slug);
  const data = await sanityFetch({ query, params });
  const { title, summary } = data;
  const metadata = { title, description: summary };
  if (data.seoData) {
    data.seoData.tags.forEach(({ tag, value }) => (metadata[tag] = value));
  }

  return metadata;
}

export default async function StoryPage({ params }: PageParams) {
  params.slug = decodeURIComponent(params.slug);

  const story = await sanityFetch<SanityDocument[]>({
    query,
    params,
  });

  // 404 if no document in Sanity.
  // This can be done more granularly with the app router, but for now general 404 behavior
  if (!story) {
    notFound();
  }

  return (
    <Story data={story}>
      <CustomPortableText value={story.content} />
    </Story>
  );
}
