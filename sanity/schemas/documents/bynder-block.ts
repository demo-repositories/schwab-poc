import { Cable } from 'lucide-react'

export default {
    name: 'bynderBlock',
    type: 'document',
    title: 'Bynder block',
    icon: Cable,
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        {
            name: 'caption',
            title: 'Caption',
            type: 'array',
            of: [{ type: 'block' }],
        },
        { name: 'bynderAsset', type: 'bynder.asset', title: 'Bynder asset' },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title,
                subtitle: 'Bynder Block',
                media: Cable,
            }
        },
    },
}
