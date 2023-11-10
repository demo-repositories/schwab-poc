export default {
    name: 'bynderBlock',
    type: 'object',
    title: 'Bynder block',
    // icon: ()=>{return <p>'B'</p>},
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'bynderAsset', type: 'bynder.asset', title: 'Bynder asset' },
    ],
}
