import { PortableTextBlock } from "@portabletext/types";
import CustomPortableText from "./custom-portable-text";
import SanityImage from "@/components/sanity-image";
import { ISanityPageDocument } from "@/lib/sanity/types";
import { groq } from "next-sanity";
import { PropsWithChildren } from "react";
/**
 * Renders 'story' document type from Sanity.
 */

export interface ISanityStoryDocument extends ISanityPageDocument {
  content: PortableTextBlock[];
  displayDate?: string;
}
type TStoryProps = {
  data: ISanityStoryDocument;
};

export const query = (slug: string) =>
  groq`*[_type == "story" && slug.current == '${slug}'][0]{slug, title, summary, displayDate, _id, _type, featuredImage{...}, content[]{..., button{..., "to":to->{slug, _type}}, "refType":*[_id==^._ref]._type}, seoData{...,}}`;

export default function Story({
  data,
  children,
}: PropsWithChildren<TStoryProps>) {
  const { title, summary, featuredImage, content, displayDate } = data;
  const dateString = displayDate
    ? new Date(displayDate).toLocaleDateString("en-US", {
        timeZone: "UTC",
      })
    : null;
  return (
    <main className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0">
      <small className="text-lg font-semibold leading-7 text-schwab-blue">
        Story
      </small>
      <div className="header-text flex justify-between">
        <div>
          {title && (
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          )}
          {summary && (
            <p className="mb-2 max-w-[66ch] text-lg italic">{summary}</p>
          )}
        </div>
        {displayDate && <div className="font-bold">{dateString}</div>}
      </div>
      {featuredImage && (
        <div className="my-5">
          <SanityImage value={featuredImage} priority />
        </div>
      )}
      {children}
    </main>
  );
}
