export default {
    name: 'bynderBlock',
    type: 'object',
    title: 'Bynder block',
    // icon: ()=>{return <p>'B'</p>},
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
