import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import LandingPage, {
  query,
  TLandingPageItem,
} from "@/components/landing-page";
import type { TTaxonomyItem } from "@/lib/sanity/types";
import PreviewLandingPage from "@/components/preview-landing-page";
import { sanityFetch } from "@/lib/sanity/fetch";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { querySetQuery } from "@/components/query-set";
import { loadQuery } from "@/lib/sanity/store";

/**
 * Renders all 'landingPage' documents from Sanity
 */

type Props = {
  params: { slug: string };
};
// Fetch for all landing page data
const pageData = async (slug: string) =>
  // await sanityFetch<TLandingPageItem[]>({
  //   query: query(slug),
  //   tags: ["landingPage"],
  // });
  await loadQuery<TLandingPageItem[]>(query(slug));

// Secondary fetch for querySet component when present
// const querySetData = async ({
//   contentTypes,
//   taxonomyFilters,
// }: {
//   contentTypes: string[];
//   taxonomyFilters: TTaxonomyItem[];
// }) =>
//   await sanityFetch<any[]>({
//     query: querySetQuery({ contentTypes, taxonomyFilters }),
//     tags: contentTypes,
//   });

// SEO metadata from document and/or overrides from 'seoData' field
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  const { data } = await pageData(slug);
  const { title, summary } = data[0];
  const metadata = { title, description: summary };

  if (data[0]?.seoData) {
    data[0].seoData.tags.forEach(({ tag, value }) => (metadata[tag] = value));
  }

  return metadata;
}

export default async function LandingPagePage({ params }: Props) {
  const { slug } = params;
  const { data } = await pageData(slug);

  // To avoid making querySet a client component, fetch data here instead of in that file
  // if (data[0]?.components) {
  //   data[0].components.forEach(async (component) => {
  //     if (component._type !== "querySet") {
  //       return;
  //     } else {
  //       const { taxonomyFilters, contentTypes } = component;
  //       return (component.querySetData = await querySetData({
  //         taxonomyFilters,
  //         contentTypes,
  //       }));
  //     }
  //   });
  // }

  // 404 if no document in Sanity.
  // This can be done more granularly with the app router, but for now general 404 behavior
  if (typeof data === "undefined") {
    return notFound();
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query(slug)}
      initialData={data}
      as={PreviewLandingPage}
    >
      <LandingPage data={data} />
    </LiveQuery>
  );
}
