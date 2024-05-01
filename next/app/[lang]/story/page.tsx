import Stories, { query } from "@/components/pages/stories";
import { sanityFetch } from "@/lib/sanity/fetch";

export default async function StoriesPage({ params }) {
  params.slug = decodeURIComponent(params.slug);
  const data = await sanityFetch<number>({ query, params });

  return <Stories data={data} />;
}
