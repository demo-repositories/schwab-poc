import Link from "next/link";

export const query = `*[_type == "story" && slug.current != null] | order(_updatedAt){title, slug, featuredImage, _id}`;

export default function Stories({ data }: { data: number }) {
  // console.log("data", data);

  return (
    <main className="mx-auto mt-5 max-w-7xl px-5 xl:px-0">
      <section>
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight">Stories</h1>
      </section>
      <section>
        {data.map(({ title, slug, _id }) => {
          return (
            <Link href={`/story/${slug.current}`} key={_id} className="block">
              {title}
            </Link>
          );
        })}
      </section>
    </main>
  );
}
