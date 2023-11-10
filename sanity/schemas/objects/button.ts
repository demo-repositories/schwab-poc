import { Code } from 'lucide-react'

export default {
    name: 'button',
    type: 'object',
    icon: Code,
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'to',
            title: 'to',
            type: 'reference',
            to: [{ type: 'story' }],
        },
        {
            name: 'hrefOverride',
            title: 'HREF Override',
            type: 'url',
            description: 'Use when linking externally.',
        },
    ],
}
