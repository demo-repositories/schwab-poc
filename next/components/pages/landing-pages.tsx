import { ISanityLandingPageDocument } from "./landing-page";

import DocumentCards from "@/components/document-cards";
import { groq } from "next-sanity";
/**
 * List page for all 'landingPage' documents
 */

export const query = groq`*[_type == "landingPage" && slug.current != null] | order(_updatedAt){title, slug, summary, featuredImage, _id, _type}`;

export default function LandingPages({
  data,
}: {
  data: ISanityLandingPageDocument[];
}) {
  return (
    <main className="mx-auto mt-5 max-w-7xl px-5 xl:px-0">
      <section>
        <h1 className=" mb-3 text-3xl font-extrabold tracking-tight fade-in">
          Landing Pages
        </h1>
      </section>
      <section>
        <div className="cards-container">
          <DocumentCards cards={data} />
        </div>
      </section>
    </main>
  );
}
