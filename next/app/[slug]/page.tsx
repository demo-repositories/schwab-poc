import { draftMode } from "next/headers";
import LandingPage, {
  query,
  ISanityLandingPageDocument,
} from "@/components/pages/landing-page";
import CardDeck from "@/components/card-deck";
import Marquee from "@/components/marquee";
import QuerySet from "@/components/query-set";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadQuery } from "@/lib/sanity/store";
import dynamic from "next/dynamic";
import type { PageParams } from "@/components/pages/types";
const PagePreview = dynamic(
  () => import("@/components/pages/landing-page/preview"),
);
/**
 * Renders all 'landingPage' documents from Sanity
 */

// Fetch for all landing page data
const pageData = async (slug: string) =>
  await loadQuery<ISanityLandingPageDocument>(query(slug));

// SEO metadata from document and/or overrides from 'seoData' field
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = params;
  const { data } = await pageData(slug);
  const { seoData, title, summary } = data;
  const metadata = { title, description: summary };

  if (seoData) {
    seoData.tags.forEach(({ tag, value }) => (metadata[tag] = value));
  }

  return metadata;
}

export default async function LandingPagePage({ params }: PageParams) {
  const { slug } = params;
  const initial = await pageData(slug);
  const { components } = initial.data;

  // 404 if no document in Sanity.
  // This can be done more granularly with the app router, but for now general 404 behavior
  if (!initial.data) {
    notFound();
  }
  // Return client component version of page for Presentation
  if (draftMode().isEnabled) {
    return <PagePreview params={params} initial={initial} />;
  }

  return (
    <LandingPage>
      {components &&
        components.map((component, i) => {
          switch (component.refType[0] || component._type) {
            case "marquee":
              return <Marquee key={component._key} {...component} />;
            case "cardDeck":
              return <CardDeck key={component._key} {...component} />;
            case "querySet":
              return <QuerySet key={component._key} {...component} />;
            default:
              return <div key={`no-component-${i}`}>no component</div>;
          }
        })}
    </LandingPage>
  );
}
