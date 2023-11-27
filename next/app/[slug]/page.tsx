import { draftMode } from "next/headers";
import LandingPage, {
  query,
  TLandingPageItem,
} from "@/components/landing-page";
import CardDeck from "@/components/card-deck";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { loadQuery } from "@/lib/sanity/store";
import dynamic from "next/dynamic";
const PagePreview = dynamic(() => import("@/components/preview-landing-page"));
/**
 * Renders all 'landingPage' documents from Sanity
 */

type Props = {
  params: { slug: string };
};
// Fetch for all landing page data
const pageData = async (slug: string) =>
  await loadQuery<TLandingPageItem[]>(query(slug));

// SEO metadata from document and/or overrides from 'seoData' field
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  const { data } = await pageData(slug);
  const { seoData, title, summary } = data[0];
  const metadata = { title, description: summary };

  if (seoData) {
    seoData.tags.forEach(({ tag, value }) => (metadata[tag] = value));
  }

  return metadata;
}

export default async function LandingPagePage({ params }: Props) {
  const { slug } = params;
  const initial = await pageData(slug);

  if (draftMode().isEnabled) {
    return <PagePreview params={params} initial={initial} />;
  }
  // 404 if no document in Sanity.
  // This can be done more granularly with the app router, but for now general 404 behavior
  if (!initial.data) {
    notFound();
  }

  return (
    <LandingPage data={initial.data}>
      <CardDeck {...initial.data[0].components[1]} />
    </LandingPage>
  );
}
