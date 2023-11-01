/**
 * Named 'featuredImage' to avoid naming collisions with Sanity's built in 'image' type
 */
export default {
  name: 'featuredImage',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      initialValue: 'image',
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
    // Sent schema had 'string-formatted'
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
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
      name: 'altText',
      type: 'string',
      title: 'Alt text',
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    },
    {
      name: 'aspectRatio',
      type: 'string',
      title: 'Aspect ratio',
    },
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
