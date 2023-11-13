import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import LandingPage, { query } from "@/components/LandingPage";
import PreviewLandingPage from "@/components/PreviewLandingPage";
import { sanityFetch } from "@/lib/sanity/fetch";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

const pageData = async (slug: string) =>
  await sanityFetch<number>({
    query: query(slug),
    tags: ["landingPage"],
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

  return metadata;
}

export default async function LandingPagePage({ params }: Props) {
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
      as={PreviewLandingPage}
    >
      <LandingPage data={data} />
    </LiveQuery>
  );
}
