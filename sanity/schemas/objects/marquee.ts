import { Heading1 } from 'lucide-react'
import { Rule } from 'sanity'
export default {
    name: 'marquee',
    title: 'Marquee',
    type: 'object',
    icon: Heading1,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'eyebrow',
            title: 'Eyebrow',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            fields: [
                {
                    name: 'altText',
                    title: 'Alt text',
                    type: 'string',
                },
            ],
        },
        {
            name: 'buttons',
            title: 'Buttons',
            type: 'array',
            of: [{ type: 'button' }],
            validation: (rule: Rule) => rule.max(2),
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title,
                subtitle: 'Marquee',
            }
        },
    },
}
