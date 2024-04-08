import { Waypoints } from 'lucide-react'

export default {
    name: 'taxonomyAttribute',
    title: 'Taxonomy attribute',
    type: 'document',
    icon: Waypoints,
    readOnly: ({ currentUser }) => {
        return !currentUser.roles.find(({ name }) => name === 'administrator')
    },
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
        },
        {
            title: 'Values',
            name: 'values',
            description: 'Options when selecting this attribute',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'taxonomyTerm' }] }],
        },
    ],
}
