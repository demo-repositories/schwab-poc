import { SearchCode } from 'lucide-react'

export default {
    name: 'querySet',
    title: 'Query set',
    type: 'document',
    icon: SearchCode,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'featuredContent',
            title: 'Featured content',
            type: 'reference',
            to: [{ type: 'story' }, { type: 'landingPage' }],
        },
        {
            name: 'bottomCta',
            title: 'Bottom CTA',
            type: 'button',
        },
        {
            name: 'contentTypes',
            title: 'Content types',
            type: 'array',
            of: [
                {
                    type: 'string',
                    options: {
                        list: [
                            {
                                title: 'Story',
                                value: 'story',
                            },
                            {
                                title: 'Landing page',
                                value: 'landingPage',
                            },
                        ],
                    },
                },
            ],
        },
        {
            name: 'taxonomyFilters',
            title: 'Taxonomy filters',
            type: 'array',
            of: [{ type: 'taxonomyItem' }],
        },
        // featuredImage => only when 'foundational'

        // taxonomy
        // author
        // style
        // => foundational
        // => discovery
        // => perspectives
    ],
}
