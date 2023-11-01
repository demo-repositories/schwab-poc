export default {
  name: 'podcast',
  type: 'object',
  fields: [
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      initialValue: 'podcast',
      readonly: true,
    },
    {
      name: 'uuid',
      type: 'string',
      title: 'UUID',
    },
    {
      name: 'identifier',
      type: 'string',
      title: 'Identifier',
    },
    {
      name: 'origin',
      type: 'string',
      title: 'Origin',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'playerUrl',
      type: 'url',
      title: 'Player URL',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
    },
    {
      name: 'show',
      type: 'string',
      title: 'Show',
    },
    {
      name: 'season',
      type: 'number',
      title: 'Season',
    },
    {
      name: 'episode',
      type: 'number',
      title: 'Episode',
    },
    // Sent schema had type 'time' which Sanity does not have.
    {
      name: 'length',
      type: 'number',
      title: 'Length',
    },
    {
      name: 'appleStoreUrl',
      type: 'url',
      title: 'Apple Store URL',
    },
    {
      name: 'googleStoreUrl',
      type: 'url',
      title: 'Google Store URL',
    },
    {
      name: 'spotifyUrl',
      type: 'url',
      title: 'Spotify URL',
    },
    {
      name: 'rssUrl',
      type: 'url',
      title: 'RSS URL',
    },
    // Sent schema had 'string-formatted'
    {
      name: 'transcript',
      type: 'string',
      title: 'Transcript',
    },
    {
      name: 'index',
      type: 'number',
      title: 'Index',
    },
    // Sent schema had set to 'null'
    // {
    //   name: 'caption',
    //   type: 'string',
    //   title: 'Caption',
    // },
  ],
}
