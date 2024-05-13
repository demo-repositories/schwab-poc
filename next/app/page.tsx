import Stories, { query as storiesQuery } from "@/components/pages/stories";
import LandingPages, {
  query as landingPagesQuery,
} from "@/components/pages/landing-pages";
import { ISanityStoryDocument } from "@/components/pages/story";
import { ISanityLandingPageDocument } from "@/components/pages/landing-page";
import { groq } from "next-sanity";
import Marquee, { TMarqueeProps } from "@/components/marquee";
import { sanityFetch } from "@/lib/sanity/fetch";
interface ISanityHomepageDocument extends ISanityLandingPageDocument {
  marquee: TMarqueeProps;
}
export default async function HomePage() {
  const storiesData = await sanityFetch<ISanityStoryDocument[]>({
    query: storiesQuery,
    params: {
      lang: "en-US",
    },
  });
  const landingPagesData = await sanityFetch<ISanityLandingPageDocument[]>({
    query: landingPagesQuery,
  });
  const { marquee } = await sanityFetch<ISanityHomepageDocument>({
    query: groq`*[_type == 'landingPage' && slug.current == 'home'][0]{..., "marquee":components[_type=='marquee'][0]{...,image{...,"palette": asset->metadata.palette}}}`,
  });

  return (
    <main className="mx-auto mb-12 mt-5 max-w-7xl px-5 2xl:px-0">
      <Marquee {...marquee} />
      <Stories data={storiesData} />
      <LandingPages data={landingPagesData} />
    </main>
  );
}
