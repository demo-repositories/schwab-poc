import Stories, { query } from "@/components/stories";
import { loadQuery } from "@/lib/sanity/store";

export default async function StoriesPage() {
  const { data } = await loadQuery<number>(query);

  return <Stories data={data} />;
}
