import LandingPages, { query } from "@/components/LandingPages";
import { sanityFetch } from "@/lib/sanity/fetch";

export default async function StoriesPage() {
  const data = await sanityFetch<number>({ query, tags: ["landingPage"] });

  return <LandingPages data={data} />;
}
