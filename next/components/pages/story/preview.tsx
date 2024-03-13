"use client";

import { useQuery } from "@/lib/sanity/loader/useQuery";
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
  data.content = data.content.map((item) => {
    if (item && item.refData && item.refData.length) {
      item = item.refData[0];
    }
    return item;
  });
  return (
    <Story data={data!}>
      <PreviewCustomPortableText value={data!.content} />
    </Story>
  );
}
``;
