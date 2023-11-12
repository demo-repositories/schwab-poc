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
            name: 'components',
            title: 'Components',
            type: 'array',
            of: [{ type: 'marquee' }],
        },
    ],
}
