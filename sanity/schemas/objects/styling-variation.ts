import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'stylingVariation',
    type: 'object',
    fields: [
        defineField({
            name: 'channel',
            type: 'string',
            options: {
                list: ['schwab.com', 'schwabcharitable.org'],
            },
        }),
        defineField({
            name: 'css',
            type: 'code',
            options: {
                language: 'css',
            },
        }),
    ],
})
