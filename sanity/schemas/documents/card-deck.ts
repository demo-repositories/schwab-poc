import { Component, LayoutGrid, Image, MousePointerSquare } from 'lucide-react'

import { CardTypeInput } from '../../components/inputs/card-type'
import Sup from '../../components/preview/Sup'
import { defineField } from 'sanity'

export const cardTypes = [
    {
        title: 'Icon card',
        value: 'iconCard',
        description: 'Icon | Header | Body all centered',
        icon: Image,
    },
    {
        title: 'CTA card',
        value: 'ctaCard',
        description: 'Color background with CTA',
        icon: MousePointerSquare,
    },
]
export default {
    name: 'cardDeck',
    title: 'Card deck',
    type: 'document',
    icon: LayoutGrid,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            group: 'content',
        },

        {
            name: 'cardType',
            title: 'Card type',
            type: 'string',
            options: {
                list: cardTypes,
                layout: 'radio',
            },
            components: { input: CardTypeInput },
            group: 'content',
        },
        {
            name: 'ctaText',
            title: 'CTA text',
            type: 'string',
            hidden: ({ parent }) => !(parent?.cardType === 'ctaCard'),
            group: 'content',
        },
        {
            name: 'cards',
            title: 'Cards',
            type: 'array',
            group: 'content',
            of: [
                // This card type maybe should be its own object, but to keep the logic for show/hide in one place its just defined in line for now
                {
                    name: 'card',
                    title: 'Card',
                    type: 'object',
                    icon: Component,
                    fields: [
                        {
                            title: 'Icon',
                            name: 'icon',
                            type: 'image',
                            fields: [
                                {
                                    name: 'altText',
                                    title: 'Alt text',
                                    type: 'string',
                                },
                            ],
                            hidden: ({ document }) => {
                                return document.cardType !== 'iconCard'
                            },
                        },
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            title: 'Body',
                            name: 'body',
                            type: 'array',
                            of: [
                                {
                                    type: 'block',
                                    styles: [
                                        { title: 'Normal', value: 'normal' },
                                    ],
                                    marks: {
                                        decorators: [
                                            {
                                                title: 'Sup',
                                                value: 'sup',
                                                icon: () => 'S^',
                                                component: Sup,
                                            },
                                            {
                                                title: 'Bold',
                                                value: 'strong',
                                                icon: () => 'B',
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                        {
                            name: 'to',
                            title: 'To',
                            type: 'reference',
                            hidden: ({ parent }) =>
                                !(parent?.cardType === 'ctaCard'),
                            to: [{ type: 'landingPage' }],
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            body: 'body',
                        },
                        prepare({ title, body }) {
                            const formattedBody = body[0].children
                                .map((item) => item.text)
                                .join('')

                            return {
                                title: title || formattedBody,
                            }
                        },
                    },
                },
            ],
        },
        defineField({
            name: 'styles',
            type: 'object',
            group: 'style',

            fields: [
                defineField({
                    name: 'variant',
                    type: 'string',
                    options: {
                        list: ['default', 'rounded'],
                    },
                }),
                defineField({
                    name: 'buttonAlign',
                    type: 'string',
                    options: {
                        list: ['left', 'right'],
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'cardType',
        },
        prepare({ title, subtitle }) {
            const name = cardTypes.filter(({ value }) => {
                return value == subtitle
            })[0].title
            return {
                title,
                subtitle: name,
            }
        },
    },
    groups: [
        {
            name: 'content',
            title: 'Content',
        },
        { name: 'style', title: 'Style' },
    ],
}
