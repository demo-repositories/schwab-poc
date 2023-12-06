import { Code } from 'lucide-react'

export default {
    name: 'button',
    type: 'object',
    icon: Code,
    options: {
        collapsible: true,
    },
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'linkType',
            title: 'Link type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'External',
                        value: 'external',
                    },
                    {
                        title: 'Internal',
                        value: 'internal',
                    },
                ],
            },
        },
        {
            name: 'to',
            title: 'To',
            type: 'reference',
            to: [{ type: 'story' }, { type: 'landingPage' }],
            hidden: ({ parent }) => parent?.linkType !== 'internal',
        },
        {
            name: 'hrefOverride',
            title: 'HREF Override',
            type: 'url',
            description:
                'Use when linking externally. Will override any value in "to"',
            hidden: ({ parent }) => parent?.linkType !== 'external',
        },
    ],
}
