import { ISanityLandingPageDocument } from "@/components/landing-page";
import SanityImage from "@/components/sanity-image";
import Button from "@/components/button";
import { ISanityStoryDocument } from "@/components/story";
import DocumentCards from "@/components/document-cards";
type TResult = ISanityStoryDocument | ISanityLandingPageDocument;
type TRenderResultsProps = {
  results: TResult[];
};

export default function RenderResults({ results }: TRenderResultsProps) {
  const typeLookup = {
    story: "Story",
    landingPage: "Landing page",
  };
  return <DocumentCards cards={results} />;
}
