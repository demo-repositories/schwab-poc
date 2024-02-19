import Stories, { query } from "@/components/pages/stories";
import { loadQuery } from "@/lib/sanity/loader/loadQuery";
export default async function StoriesPage() {
  const { data } = await loadQuery<number>(query);

  return <Stories data={data} />;
}
