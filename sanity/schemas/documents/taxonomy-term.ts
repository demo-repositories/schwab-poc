import { WholeWord } from 'lucide-react'

export default {
    name: 'taxonomyTerm',
    title: 'Taxonomy term',
    type: 'document',
    icon: WholeWord,
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
