import Stories, { query } from "@/components/pages/stories";
import { loadQuery } from "@/lib/sanity/loader/loadQuery";
export default async function StoriesPage({ params }) {
  const { data } = await loadQuery<number>(query, params);

  return <Stories data={data} />;
}
