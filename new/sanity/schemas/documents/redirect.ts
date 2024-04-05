import { defineType, defineField } from "sanity";

export const redirectType = defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  description: "Redirect for next.config.js",
  fields: [
    defineField({
      name: "source",
      title: "Source",
      type: "slug",
    }),
    defineField({
      name: "destination",
      title: "Destination",
      type: "slug",
    }),
    defineField({
      name: "permanent",
      title: "Permanent",
      type: "boolean",
    }),
  ],
});
