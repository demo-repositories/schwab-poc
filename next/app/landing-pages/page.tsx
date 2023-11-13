import LandingPages, { query } from "@/components/landing-pages";
import { TLandingPageProps } from "@/components/landing-page";
import { sanityFetch } from "@/lib/sanity/fetch";

/**
 * List of all available 'landingPage' documents. Not in POC scope but helpful for seeing what contet is available to look at.
 */

export default async function StoriesPage() {
  const data = await sanityFetch<TLandingPageProps[]>({
    query,
    tags: ["landingPage"],
  });

  return <LandingPages data={data} />;
}
