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
    // Sanity will automatically create a "_type" field for every document based on its type
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'identifier',
      type: 'string',
      title: 'Identifier',
    },
    // Sanity will automatically create an "_id" field for every document
    {
      name: 'uuid',
      type: 'string',
      title: 'UUID',
    },
    // Does 'language' have set options? Could be set with Sanity's internationalization tools
    {
      name: 'language',
      type: 'string',
      title: 'Language',
    },
    // Does 'moderationState' have set options?
    // Eventually this could be made into a workflow with Sanity
    {
      name: 'moderationState',
      type: 'string',
      title: 'Moderation state',
      initialValue: 'update-me',
      options: {
        list: [
          {title: 'What are the moderation states?', value: 'update-me'},

          {title: 'Review', value: 'general-story'},
          {title: 'Published', value: 'podcast'},
        ],
      },
    },

    // sent schema sent 'string' but all test data was closer to 'slug'
    {
      name: 'urlAlias',
      type: 'slug',
      title: 'URL Alias',
      options: {
        source: 'title',
      },
    },
    {
      name: 'hostname',
      type: 'string',
      title: 'Hostname',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
    // Also could be automatically generated based on word count / file length
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
    // {
    //   name: 'featuredMedia',
    //   type: 'array',
    //   title: 'Featured media',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{type: 'accessibleImage'}, {type: 'podcast'}, {type: 'video'}, {type: 'audio'}],
    //     },
    //   ],
    // },
    // {
    //   name: 'authors',
    //   type: 'array',
    //   title: 'Authors',
    //   of: [{type: 'reference', to: [{type: 'person'}]}],
    // },
    // {
    //   name: 'contributors',
    //   type: 'array',
    //   title: 'Contributors',
    //   of: [{type: 'reference', to: [{type: 'person'}]}],
    // },
    {
      name: 'complianceCode',
      type: 'string',
      title: 'Compliance code',
    },
    // received schema had "string-formatted"
    {
      name: 'disclosure',
      type: 'string',
      title: 'Disclosure',
    },
    // {name: 'components', title:'Components', type: 'storyRichText'},
    {
      name: 'taxonomy',
      type: 'array',
      title: 'Taxonomy',
      of: [{type: 'taxonomy'}],
    },
    {
      name: 'apiMetadata',
      type: 'object',
      title: 'API Metadata',
      fields: [
        {
          name: 'cacheTags',
          type: 'string',
          title: 'Cache tags',
        },
        {
          name: 'analytics',
          type: 'object',
          title: 'Analytics',
          fields: [
            {
              name: 'adHocTags',
              type: 'array',
              title: 'Ad hoc tags',
              of: [{type: 'keyValue'}],
            },
            {
              name: 'doubleClickTags',
              type: 'array',
              title: 'Doubleclick tags',
              of: [{type: 'doubleClickTag'}],
            },
            {
              name: 'analyticsTitle',
              type: 'string',
              title: 'Analytics title',
            },
            {
              name: 'analyticsCategory',
              type: 'string',
              title: 'Analytics category',
            },
          ],
        },
        {
          name: 'searchMeta',
          type: 'object',
          title: 'Search meta',
          fields: [
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'abstract',
              type: 'string',
              title: 'Abstract',
            },
            {
              name: 'keywords',
              type: 'string',
              title: 'Keywords',
            },
          ],
        },
      ],
    },
    {
      name: 'style',
      type: 'object',
      title: 'Style',
      fields: [
        {
          name: 'hideFeaturedInTemplate',
          type: 'boolean',
          title: 'Hide featured',
        },
      ],
    },
    // Sanity will save + number past versions as well
    {
      name: 'resourceVersion',
      type: 'number',
      title: 'Resource version',
    },
  ],
}
