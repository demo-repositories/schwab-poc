export default {
  name: 'taxonomy',
  type: 'object',
  fields: [
    {
      name: 'vocabulary',
      type: 'string',
      title: 'Vocabulary',
    },
    {
      name: 'vocabularyName',
      type: 'string',
      title: 'Vocabulary name',
    },
    {
      name: 'vocabularyUuid',
      type: 'string',
      title: 'Vocabulary UUID',
    },
    {
      name: 'terms',
      type: 'array',
      title: 'Terms',
      of: [{type: 'term'}],
    },
  ],
}
