export default {
    name: 'bynderBlock',
    type: 'document',
    title: 'Bynder block',
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
}
