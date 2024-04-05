import { draftMode } from "next/headers";
import type { Metadata } from "next";
import LandingPage from "@/components/page/landing-page";
import { loadQuery } from "@/sanity/lib/store";
import { LANDING_PAGE_QUERY } from "@/sanity/lib/queries";
import { LANDING_PAGE_QUERYResult } from "@/sanity/types";
import LandingPagePreview from "@/components/page/landing-page-preview";

// SEO metadata from document and/or overrides from 'seoData' field
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = params;
  const { data } = await loadQuery<LANDING_PAGE_QUERYResult>(
    LANDING_PAGE_QUERY,
    { slug },
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  if (!data) return {};

  const { seoData, title, summary } = data;
  const metadata = { title, description: summary };

  if (seoData) {
    seoData.tags.forEach(({ tag, value }) => (metadata[tag] = value));
  }

  return metadata;
}

export default async function Page({ params }) {
  const { slug } = params;
  const initial = await loadQuery<LANDING_PAGE_QUERYResult>(
    LANDING_PAGE_QUERY,
    { slug },
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <LandingPagePreview initial={initial} />
  ) : (
    <LandingPage page={initial.data} />
  );
}
