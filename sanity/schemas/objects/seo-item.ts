import {Code} from 'lucide-react'

const tags = [
  {title: 'Title', value: 'title'},
  {title: 'Description', value: 'description'},
]

export default {
  name: 'seoItem',
  type: 'object',
  icon: Code,
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: tags,
      },
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
    },
  ],
  preview: {
    select: {
      tag: 'tag',
    },
    prepare({tag}) {
      const tagName =
        tag && tags.flatMap((option) => (option.value === tag ? [option.title] : []))[0]
      return {
        title: tagName,
      }
    },
  },
}
