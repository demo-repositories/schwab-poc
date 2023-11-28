import LandingPages, { query } from "@/components/pages/landing-pages";
import { ISanityLandingPageDocument } from "@/components/pages/landing-page";
import { loadQuery } from "@/lib/sanity/store";

/**
 * List of all available 'landingPage' documents. Not in POC scope but helpful for seeing what contet is available to look at.
 */

export default async function LandingPagesPage() {
  const { data } = await loadQuery<ISanityLandingPageDocument[]>(query);

  return <LandingPages data={data} />;
}
