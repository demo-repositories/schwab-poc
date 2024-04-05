import { Code } from "lucide-react";
import { defineType } from "sanity";

/**
 * TODO: align this with Next's metadata field options: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
 */
const tags = [
  { title: "Title", value: "title" },
  { title: "Description", value: "description" },
];

export const seoItemType = defineType({
  name: "seoItem",
  type: "object",
  icon: Code,
  fields: [
    {
      name: "tag",
      title: "Tag",
      type: "string",
      options: {
        list: tags,
      },
    },
    {
      name: "value",
      title: "Value",
      type: "string",
    },
  ],
  preview: {
    select: {
      tag: "tag",
    },
    prepare({ tag }) {
      const tagName =
        tag &&
        tags.flatMap((option) =>
          option.value === tag ? [option.title] : []
        )[0];
      return {
        title: tagName,
      };
    },
  },
});
