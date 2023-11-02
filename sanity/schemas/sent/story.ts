/**
 * This is the object sent from Schwab with 'components' excluded for brevity
 *
 * Components listed on call: Bynder block, data table, video, CTA from library with segment tagging
 */
const storyFromSchwab = {
  role: 'story',
  identifier: 'string',
  uuid: 'uuid',
  language: 'string',
  moderationState: 'string',
  urlAlias: 'string',
  hostname: 'string',
  title: 'string',
  subtitle: 'string',
  shortTitle: 'string',
  summary: 'string',
  duration: 'time',
  excerpt: 'string-formatted',
  displayDate: 'dateTime',
  lastPublished: 'dateTime',
  editorialType: 'string',
  featuredMedia: [
    {
      role: 'image',
      uuid: 'uuid',
      identifier: 'string',
      caption: 'string-formatted',
      title: 'string',
      url: 'url',
      altText: 'string',
      attribution: 'string',
      aspectRatio: 'string',
      disclosure: 'string',
      index: 'integer',
    },
    {
      role: 'podcast',
      uuid: 'uuid',
      identifier: 'string',
      origin: 'string',
      title: 'string',

      url: 'url',

      playerUrl: 'url',

      type: 'string',

      show: 'string',
      season: 'integer',

      episode: 'integer',

      length: 'time',

      appleStoreUrl: 'url',

      googleStoreUrl: 'url',
      spotifyUrl: 'url',
      rssUrl: 'url',
      transcript: 'string-formatted',
      caption: null,

      index: 'integer',
    },

    {
      role: 'video',

      uuid: 'uuid',

      identifier: 'string',

      title: 'string',

      url: 'url',

      srt: 'url',

      caption: 'string-formatted',

      poster: {
        duration: 'time',
        transcript: 'string-formatted',
        aspectRatio: 'string',
        attribution: 'string',
        role: 'image',

        title: 'string',
        url: 'url',
      },

      altText: 'string',
      attribution: 'string',
      aspectRatio: 'string',
      disclosure: 'string-formatted',
      index: 'integer',
    },

    {
      role: 'audio',

      uuid: 'uuid',

      identifier: 'string',
      origin: 'string',
      title: 'string',
      url: 'url',

      playerUrl: 'url',

      duration: 'time',
      fileName: 'string',
      format: 'string',
      transcript: 'string-formatted',
      caption: 'string-formatted',
      index: 'integer',
    },
  ],

  authors: [
    {
      role: 'person',

      uuid: 'uuid',

      identifier: 'string',
      language: 'string',

      urlAlias: 'url',

      name: 'string',

      firstName: 'string',

      lastName: 'string',

      image: {
        title: 'string',

        url: 'url',

        altText: 'string',
      },
    },
  ],

  contributors: [
    {
      role: 'person',

      identifier: 'string',

      uuid: 'uuid',

      language: 'string',

      urlAlias: 'url',

      name: 'string',

      firstName: 'string',

      lastName: 'string',

      image: {
        title: 'string',

        url: 'url',
        altText: 'string',
      },
    },
  ],
  complianceCode: 'string',
  disclosure: 'string-formatted',
  components: ['components'],
  taxonomy: [
    {
      vocabulary: 'string',

      vocabularyName: 'string',

      vocabularyUuid: 'uuid',

      terms: [
        {
          termId: 'string',

          termUuid: 'uuid',

          isPrimary: 'boolean',

          termName: 'string',

          parentTermId: 'string',
          'parent TermUuid': 'GUID',
          'parent TermName': 'string',
        },
      ],
    },
  ],

  apiMetadata: {
    cacheTags: 'string',
    analytics: {
      adHocTags: [{key: 'string', value: 'string'}],

      doubleClickTags: [
        {
          type: 'string',

          category: 'string',
        },
      ],

      analyticsTitle: 'string',

      analyticsCategory: 'string',
    },

    searchMeta: {
      description: 'string',

      abstract: 'string',

      keywords: 'string',
    },
  },

  style: {
    hideFeaturedInTemplate: 'boolean',
  },
  resourceVersion: 'integer',
}
