import { Component, LayoutGrid, Image, SquareMousePointer } from "lucide-react";

import { CardTypeInput } from "../../components/inputs/card-type";
import Sup from "../../components/preview/Sup";
import { defineType } from "sanity";

export const cardTypes = [
  {
    title: "Icon card",
    value: "iconCard",
    description: "Icon | Header | Body all centered",
    icon: Image,
  },
  {
    title: "CTA card",
    value: "ctaCard",
    description: "Color background with CTA",
    icon: SquareMousePointer,
  },
];
export const cardDeckType = defineType({
  name: "cardDeck",
  title: "Card deck",
  type: "document",
  icon: LayoutGrid,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },

    {
      name: "cardType",
      title: "Card type",
      type: "string",
      options: {
        list: cardTypes,
        layout: "radio",
      },
      components: { input: CardTypeInput },
    },
    {
      name: "ctaText",
      title: "CTA text",
      type: "string",
      hidden: ({ parent }) => !(parent?.cardType === "ctaCard"),
    },
    {
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        // This card type maybe should be its own object, but to keep the logic for show/hide in one place its just defined in line for now
        {
          name: "card",
          title: "Card",
          type: "object",
          icon: Component,
          fields: [
            {
              title: "Icon",
              name: "icon",
              type: "image",
              fields: [
                {
                  name: "altText",
                  title: "Alt text",
                  type: "string",
                },
              ],
              hidden: ({ document }) => {
                return document.cardType !== "iconCard";
              },
            },
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Body",
              name: "body",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  marks: {
                    decorators: [
                      {
                        title: "Sup",
                        value: "sup",
                        icon: () => "S^",
                        component: Sup,
                      },
                      {
                        title: "Bold",
                        value: "strong",
                        icon: () => "B",
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: "to",
              title: "To",
              type: "reference",
              to: [{ type: "landingPage" }],
            },
          ],
          preview: {
            select: {
              title: "title",
              body: "body",
            },
            prepare({ title, body }) {
              const formattedBody = body[0].children
                .map((item) => item.text)
                .join("");

              return {
                title: title || formattedBody,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Card deck",
      };
    },
  },
});
