import { TLandingPageDocument } from "@/components/landing-page";
import { TSanityStoryDocument } from "@/components/story";
type TResult = TSanityStoryDocument | TLandingPageDocument;
type TRenderResultsProps = {
  results: TResult[];
};

export default function RenderResults({ results }: TRenderResultsProps) {
  console.log("results", results);
  return (
    <div className="gap-4 lg:grid lg:grid-cols-3 ">
      {results &&
        results.map(({ title, _key, summary, featuredImage }: TResult) => (
          <div key={_key}>
            <strong className="block">{title}</strong>
            <p>{summary}</p>
          </div>
        ))}
    </div>
  );
}
