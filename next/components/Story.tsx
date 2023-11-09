export const query = (slug: string) =>
  `*[_type == "story" && slug.current == '${slug}']{slug, title}`;

export default function Story({ data }) {
  console.log("data", data);
  const { title, slug } = data[0];
  return (
    <main>
      {title && (
        <h1 className="text-white text-3xl font-bold tracking-tight">
          {title}
        </h1>
      )}
    </main>
  );
}
