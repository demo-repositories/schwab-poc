import { ISanityLandingPageDocument } from "@/components/pages/landing-page";

import { ISanityStoryDocument } from "@/components/pages/story";
import DocumentCards from "@/components/document-cards";
export type TResult = ISanityStoryDocument | ISanityLandingPageDocument;
type TRenderResultsProps = {
  results: TResult[];
};

export default function RenderResults({ results }: TRenderResultsProps) {
  return <DocumentCards cards={results} />;
}
