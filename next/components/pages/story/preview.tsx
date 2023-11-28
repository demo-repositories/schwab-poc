"use client";

import { useQuery } from "@/lib/sanity/store";
import Story, { ISanityStoryDocument, query } from "./index";
import PreviewCustomPortableText from "./custom-portable-text/preview";

export default function StoryPreview(props) {
  const { params, initial } = props;
  const { slug } = params;
  const { data } = useQuery<ISanityStoryDocument>(query(slug), params, {
    initial,
  });

  return (
    <Story data={data!}>
      <PreviewCustomPortableText value={data.content} />
    </Story>
  );
}
``;
