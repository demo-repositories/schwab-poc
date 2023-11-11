import { CornerDownRight } from 'lucide-react'

export default {
    name: 'taxonomyTerm',
    title: 'Taxonomy term',
    type: 'document',
    icon: CornerDownRight,
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
    ],
}
