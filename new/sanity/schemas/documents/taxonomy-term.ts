import { WholeWord } from "lucide-react";
// import { isUniqueAcrossAllDocuments } from "@/sanity/validation/isUniqueAcrossAllDocuments";
import { defineType } from "sanity";

export const taxonomyTermType = defineType({
  name: "taxonomyTerm",
  title: "Taxonomy term",
  type: "document",
  icon: WholeWord,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        // isUnique: isUniqueAcrossAllDocuments,
      },
    },
  ],
});
