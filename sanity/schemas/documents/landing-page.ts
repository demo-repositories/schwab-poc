import type { Rule } from 'sanity'
export default {
    name: 'landingPage',
    type: 'document',
    title: 'Landing page',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        },
        {
            title: 'Summary',
            name: 'summary',
            type: 'string',
        },
        {
            name: 'featuredImage',
            title: 'Featured image',
            type: `image`,
            fields: [
                {
                    name: 'altText',
                    title: 'Alt text',
                    type: 'string',
                    validation: (rule: Rule) => rule.required(),
                },
            ],
        },
        {
            name: 'components',
            title: 'Components',
            type: 'array',
            of: [{ type: 'marquee' }],
        },
    ],
}
