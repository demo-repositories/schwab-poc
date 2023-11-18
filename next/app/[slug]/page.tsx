import { draftMode } from "next/headers";
import LandingPage, {
  query,
  TLandingPageItem,
} from "@/components/landing-page";
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
  const isDraft = draftMode().isEnabled;
  if (isDraft) {
    return (
      <PagePreview params={params} initial={initial} draftMode={isDraft} />
    );
  }
  // 404 if no document in Sanity.
  // This can be done more granularly with the app router, but for now general 404 behavior

  if (!initial.data) {
    notFound();
  }

  return <LandingPage data={initial.data} draftMode={isDraft} />;
}
/**
 * Steps to make a thing a thing:
 * 0. overall need 2 server components (wrapper + renderer) and 1 client component (preview)
 * 1. in the wrapper component fetch 'initial' with the server side loadquery
 * 2. if draftMode in wrapper return preview client component from wrapper being passed initial data + ID
 * 3. in preview client component use queryhook
 * 4. if not draftmode return the server renderer component + pass it server-side data
 */
