import { defineType, type Rule } from "sanity";
import DynamicCTAIcon from "../../components/icons/dynamic-cta";
// import { PreviewDynamicCTA } from '../../components/preview/PreviewDynamicCTA'

export const dynamicCtaType = defineType({
  name: "dynamicCta",
  type: "document",
  title: "Dynamic CTA",
  icon: DynamicCTAIcon,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "button",
      title: "Button",
      type: "button",
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: "Dynamic CTA",
        media: DynamicCTAIcon,
      };
    },
  },
});
