import LandingPages, { query } from "@/components/landing-pages";
import { TLandingPageProps } from "@/components/landing-page";
import { loadQuery } from "@/lib/sanity/store";

/**
 * List of all available 'landingPage' documents. Not in POC scope but helpful for seeing what contet is available to look at.
 */

export default async function StoriesPage() {
  const { data } = await loadQuery<TLandingPageItem[]>(query);

  return <LandingPages data={data} />;
}
