import StoryCards from "./StoryCards";

/**
 * List page for all 'landingPage' documents
 */

export const query = `*[_type == "landingPage" && slug.current != null] | order(_updatedAt){title, slug, summary, featuredImage, _id, _type}`;

export default function LandingPages({ data }: { data: number }) {
  return (
    <main className="mx-auto mt-5 max-w-7xl px-5 xl:px-0">
      <section>
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight">
          Landing Pages
        </h1>
      </section>
      <section>
        <div className="cards-container">
          <StoryCards cards={data} />
        </div>
      </section>
    </main>
  );
}
