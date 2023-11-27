"use client";

import { useQuery } from "@/lib/sanity/store";
import Story, { TSanityStoryDocument, query } from "./story";

export default function StoryPreview(props) {
  const { params, initial } = props;
  const { slug } = params;
  const { data } = useQuery<TSanityStoryDocument>(query(slug), params, {
    initial,
  });

  return <Story data={data!} />;
}
``;
