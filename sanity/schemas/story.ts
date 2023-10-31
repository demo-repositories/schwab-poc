/**
 * Full original schema in 'story-sent.ts'
 */

import type {Rule} from 'sanity'
import {BookText} from 'lucide-react'

export default {
  name: 'story',
  type: 'document',
  title: 'Story',
  icon: BookText,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    // sent schema sent 'string' but all test data was closer to 'slug'
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'hostname',
      type: 'url',
      title: 'Hostname',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'shortTitle',
      type: 'string',
      title: 'Short title',
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary',
    },
    // received schema had type "time", which Sanity does not have (datetime assumably would not work for this use case).
    // Also could be automatically generated based on word count
    {
      name: 'duration',
      type: 'number',
      title: 'Duration',
      validation: (rule: Rule) => rule.positive(),
    },
    // received schema had "string-formatted"
    {
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt',
    },
    {
      name: 'displayDate',
      type: 'datetime',
      title: 'Display date',
    },
    {
      name: 'lastPublished',
      type: 'datetime',
      title: 'Last published',
    },
    // Does 'editorialType' have set options?
    {
      name: 'editorialType',
      type: 'string',
      title: 'Editorial type',
      initialValue: 'update-me',
      options: {
        list: [
          {title: 'What are the editorial types?', value: 'update-me'},

          {title: 'General story', value: 'general-story'},
          {title: 'Podcast', value: 'podcast'},
        ],
      },
    },
    {
      name: 'featuredMedia',
      type: 'array',
      title: 'Featured media',
      of: [
        {
          type: 'reference',
          to: [{type: 'accessibleImage'}, {type: 'podcast'}, {type: 'video'}, {type: 'audio'}],
        },
      ],
    },
    {
      name: 'authors',
      type: 'array',
      title: 'Authors',
      of: [{type: 'reference', to: [{type: 'person'}]}],
    },
    {
      name: 'contributors',
      type: 'array',
      title: 'Contributors',
      of: [{type: 'reference', to: [{type: 'person'}]}],
    },
    {name: 'content', type: 'storyRichText'},
  ],
}
