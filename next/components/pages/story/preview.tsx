"use client";

import { useQuery } from "@/lib/sanity/store";
import Story, { ISanityStoryDocument, query } from "./index";
import PreviewCustomPortableText from "./custom-portable-text/preview";
import { PageParams } from "../types";
interface StoryPreview extends PageParams {
  initial: {
    data: ISanityStoryDocument;
  };
}
export default function StoryPreview({ params, initial }: StoryPreview) {
  const { slug } = params;
  const { data } = useQuery<ISanityStoryDocument>(query(slug), params, {
    initial,
  });

  return (
    <Story data={data!}>
      <PreviewCustomPortableText value={data!.content} />
    </Story>
  );
}
``;
