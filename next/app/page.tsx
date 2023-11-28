import Stories, { query as storiesQuery } from "@/components/pages/stories";
import LandingPages, {
  query as landingPagesQuery,
} from "@/components/pages/landing-pages";
import { loadQuery } from "@/lib/sanity/store";

export default async function HomePage() {
  const storiesData = await loadQuery<number>(storiesQuery);
  const landingPagesData = await loadQuery<number>(landingPagesQuery);

  return (
    <>
      <Stories data={storiesData.data} />
      <LandingPages data={landingPagesData.data} />
    </>
  );
}
