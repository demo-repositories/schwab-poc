import LandingPage, { query } from "@/components/pages/landing-page";
import CardDeck from "@/components/card-deck";
import Marquee from "@/components/marquee";
import QuerySet from "@/components/query-set";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { PageParams } from "@/components/pages/types";
import { sanityFetch } from "@/lib/sanity/fetch";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity/client";

/**
 * Renders all 'landingPage' documents from Sanity
 */

// SEO metadata from document and/or overrides from 'seoData' field
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = params;
  const data = await sanityFetch({ query, params });
  if (!data) return {};

  const { seoData, title, summary } = data;
  const metadata = { title, description: summary };

  if (seoData) {
    seoData.tags.forEach(({ tag, value }) => (metadata[tag] = value));
  }

  return metadata;
}
export async function generateStaticParams() {
  const query = groq`*[_type=="landingPage"]{"slug": slug.current, "lang":language}`;
  const pages = await client.fetch(query);
  return pages;
}

export default async function LandingPagePage({ params }: PageParams) {
  const { slug } = params;
  const page = await sanityFetch({ query, params });
  // 404 if no document in Sanity.
  // This can be done more granularly with the app router, but for now general 404 behavior
  if (slug == "home" || !page) {
    notFound();
  }

  // Return client component version of page for Presentation
  // if (draftMode().isEnabled) {
  //   return <PagePreview params={params} initial={initial} />;
  // }

  const { components, taxonomy } = page;

  return (
    <LandingPage taxonomy={taxonomy}>
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
