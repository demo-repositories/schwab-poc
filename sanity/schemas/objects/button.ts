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
            name: 'to',
            title: 'To',
            type: 'reference',
            to: [{ type: 'story' }, { type: 'landingPage' }],
        },
        {
            name: 'hrefOverride',
            title: 'HREF Override',
            type: 'url',
            description:
                'Use when linking externally. Will override any value in "to"',
        },
    ],
}
