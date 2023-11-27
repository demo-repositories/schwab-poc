import { draftMode } from "next/headers";
import LandingPage, {
  query,
  ISanityLandingPageDocument,
} from "@/components/pages/landing-page";
import CardDeck from "@/components/card-deck";
import Marquee from "@/components/marquee";
import QuerySet from "@/components/query-set";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { loadQuery } from "@/lib/sanity/store";
import dynamic from "next/dynamic";
const PagePreview = dynamic(
  () => import("@/components/pages/landing-page/preview"),
);
/**
 * Renders all 'landingPage' documents from Sanity
 */

// Props provided from router data
type Props = {
  params: { slug: string };
};
// Fetch for all landing page data
const pageData = async (slug: string) =>
  await loadQuery<ISanityLandingPageDocument[]>(query(slug));

// SEO metadata from document and/or overrides from 'seoData' field
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  const { data } = await pageData(slug);
  const { title, summary } = data;
  const metadata = { title, description: summary };

  if (data.seoData) {
    data.seoData.tags.forEach(({ tag, value }) => (metadata[tag] = value));
  }

  return metadata;
}

export default async function LandingPagePage({ params }: Props) {
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
      {/* <CardDeck {...initial.data[0].components[1]} /> */}
    </LandingPage>
  );
}
