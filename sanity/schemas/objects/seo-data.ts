export default {
    name: 'seoData',
    title: 'SEO Data',
    type: 'object',
    options: {
        collapsible: true,
    },
    description:
        'Override for SEO and meta tags. Will automatically generate values from page content if left blank.',
    fields: [
        {
            name: 'tags',
            type: 'array',
            title: 'Tag overrides',
            of: [{ type: 'seoItem' }],
        },
    ],
}
