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
            group: 'content',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            group: 'content',
            options: {
                source: 'title',
            },
        },
        {
            title: 'Summary',
            name: 'summary',
            type: 'string',
            group: 'content',
        },
        {
            name: 'featuredImage',
            title: 'Featured image',
            type: `image`,
            group: 'content',
            options: { collapsible: true },
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
            group: 'content',
            of: [
                { type: 'marquee' },
                {
                    type: 'reference',
                    to: [{ type: 'cardDeck' }, { type: 'querySet' }],
                },
            ],
        },
        {
            name: 'taxonomy',
            title: 'Taxonomy',
            type: 'array',
            of: [{ type: 'taxonomyItem' }],
            group: 'taxonomy',
        },
        {
            name: 'seoData',
            title: 'SEO Data',
            type: 'seoData',
            group: 'seo',
        },
    ],
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true,
        },
        {
            name: 'seo',
            title: 'SEO',
        },
        {
            name: 'taxonomy',
            title: 'Taxonomy',
        },
    ],
}
