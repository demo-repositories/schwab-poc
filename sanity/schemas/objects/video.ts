export default {
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    {
      name: 'file',
      type: 'file',
      accept: 'video/*',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      initialValue: 'video',
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
      name: 'srt',
      type: 'url',
      title: 'SRT',
    },
    // sent schema had 'string-formatted'
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    // This should assumably become 'image' if/when assets are moved into Sanity
    {
      name: 'poster',
      type: 'object',
      title: 'Poster',
      fields: [
        // Sent schema had 'time' which doesn't exist in Sanity.
        // This could also be computed by Sanity based on the file
        {
          name: 'duration',
          type: 'number',
          title: 'Duration',
        },
        // sent schema had 'string-formatted'
        {
          name: 'transcript',
          type: 'string',
          title: 'Transcript',
        },
        // Could be computed by Sanity based on file
        {
          name: 'aspectRatio',
          type: 'string',
          title: 'Aspect ratio',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
        {
          name: 'role',
          type: 'string',
          title: 'Role',
          initialValue: 'image',
          readonly: true,
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
      ],
    },
    {
      name: 'altText',
      type: 'string',
      title: 'Alt text',
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    },
    // Could be computed by Sanity based on file
    {
      name: 'aspectRatio',
      type: 'string',
      title: 'Aspect ratio',
    },
    // sent schema had 'string-formatted'
    {
      name: 'disclosure',
      type: 'string',
      title: 'Disclosure',
    },
    {
      name: 'index',
      type: 'number',
      title: 'Index',
    },
  ],
}
