export default {
  name: 'term',
  type: 'object',
  fields: [
    {
      name: 'termId',
      type: 'string',
      title: 'Term ID',
    },
    {
      name: 'termUuid',
      type: 'string',
      title: 'Term UUID',
    },
    {
      name: 'isPrimary',
      type: 'boolean',
      title: 'Is primary?',
    },
    {
      name: 'termName',
      type: 'string',
      title: 'Term name',
    },
    {
      name: 'parentTermId',
      type: 'string',
      title: 'Parent term ID',
    },
    {
      name: 'parentTermUuid',
      type: 'string',
      title: 'Parent term UUID',
    },
    {
      name: 'parentTermName',
      type: 'string',
      title: 'Parent term name',
    },
  ],
}
