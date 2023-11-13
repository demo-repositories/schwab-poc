import { Component, Grid2X2 } from 'lucide-react'

export default {
    name: 'cardDeck',
    title: 'Card deck',
    type: 'object',
    icon: Grid2X2,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },

        {
            name: 'cardType',
            title: 'Card type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Icon card',
                        value: 'iconCard',
                    },
                    {
                        title: 'CTA card',
                        value: 'ctaCard',
                    },
                ],
            },
        },
        {
            name: 'ctaText',
            title: 'CTA text',
            type: 'string',
            hidden: ({ parent }) => !(parent?.cardType === 'ctaCard'),
        },
        {
            name: 'cards',
            title: 'Cards',
            type: 'array',
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
                            hidden: ({ parent, document }) => {
                                const cardDecks = document.components.filter(
                                    (component) => component._type == 'cardDeck'
                                )
                                const getCardDeck = (parentKey: string) =>
                                    cardDecks.filter((deck) =>
                                        deck.cards
                                            .map((card) => card._key)
                                            .includes(parentKey)
                                    )
                                const thisCardDeck =
                                    cardDecks.length === 1
                                        ? cardDecks[0]
                                        : getCardDeck(parent._key)
                                return thisCardDeck.cardType !== 'iconCard'

                                // console.log('parent', parent)
                                // console.log('document', document)
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
                            type: 'string',
                        },
                        {
                            name: 'to',
                            title: 'To',
                            type: 'reference',
                            to: [{ type: 'landingPage' }],
                        },
                    ],
                },
            ],
        },
    ],
}
