export default {
  name: 'audio',
  type: 'object',
  title: 'Audio',
  fields: [
    {
      name: 'file',
      type: 'file',
      accept: 'audio/*',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      initialValue: 'audio',
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
    // Sent schema had 'time' which doesn't exist in Sanity.
    // This could also be computed by Sanity based on the file
    {
      name: 'duration',
      type: 'number',
      title: 'Duration',
    },
    // Can also be queried for in 'file' field above
    {
      name: 'fileName',
      type: 'string',
      title: 'File name',
    },
    // Can also be queried for in 'file' field above
    {
      name: 'format',
      type: 'string',
      title: 'Format',
    },
    // sent schema had 'string-formatted'
    {
      name: 'transcript',
      type: 'string',
      title: 'Transcript',
    },
    // sent schema had 'string-formatted'
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },

    {
      name: 'index',
      type: 'number',
      title: 'Index',
    },
  ],
}
