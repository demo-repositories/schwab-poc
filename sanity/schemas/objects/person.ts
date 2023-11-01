export default {
  name: 'person',
  type: 'object',
  title: 'Person',
  fields: [
    {
      name: 'role',
      type: 'string',
      title: 'string',
      initialValue: 'person',
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
    // If this is 'language spoken by author' it could be auto-filled by Sanity based on i18n info
    {
      name: 'language',
      type: 'string',
      title: 'Language',
    },
    {
      name: 'urlAlias',
      type: 'url',
      title: 'URL Alias',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'firstName',
      type: 'string',
      title: 'First name',
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last name',
    },
    // Can/should become type 'image' eventually
    {
      name: 'image',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'url', type: 'url', title: 'URL'},
        {name: 'altText', type: 'string', title: 'Alt text'},
      ],
    },
  ],
}
