import DocumentCards from "@/components/document-cards";
import { groq } from "next-sanity";
import { ISanityStoryDocument } from "./story";

/**
 * List page for all 'story' documents
 */

export const query = groq`*[_type == "story" && slug.current != null && displayDate != null && language == $lang]  | order(displayDate desc){title, slug, summary, language, featuredImage, _id, _type, displayDate}`;

export default function Stories({ data }: { data: ISanityStoryDocument[] }) {
  return (
    <main className="mx-auto mt-5 max-w-7xl px-5 xl:px-0">
      <section>
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight">Stories</h1>
      </section>
      <section>
        <div className="cards-container">
          <DocumentCards cards={data} />
        </div>
      </section>
    </main>
  );
}
