import type { Rule } from 'sanity'
import { BookText } from 'lucide-react'

export default {
    name: 'story',
    title: 'Story',
    type: 'document',
    icon: BookText,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'content',
        },
        {
            name: 'slug',
            type: 'slug',
            source: 'title',
            title: 'Slug',
            options: {
                source: 'title',
            },
            // validation: (rule: Rule) => rule.required(),
            group: 'content',
        },
        {
            name: 'summary',
            type: 'text',
            title: 'Summary',
            group: 'content',
        },
        {
            name: 'displayDate',
            title: 'Display date',
            type: 'date',
            group: 'content',
        },
        {
            name: 'featuredImage',
            title: 'Featured image',
            type: `image`,
            fields: [
                {
                    name: 'altText',
                    title: 'Alt text',
                    type: 'string',
                    validation: (rule: Rule) => rule.required(),
                },
            ],
            group: 'content',
        },
        {
            name: 'editorialType',
            title: 'Editorial type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'General story',
                        value: 'general-story',
                    },
                    {
                        title: 'Podcast',
                        value: 'podcast',
                    },
                    {
                        title: 'Video',
                        value: 'video',
                    },
                ],
            },
            group: 'content',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'array',
                            of: [{ type: 'block' }],
                        },
                    ],
                },
                {
                    type: 'bynder.asset',
                },
                {
                    type: 'reference',
                    title: 'Shared block',
                    icon: undefined,
                    to: [
                        { type: 'bynderBlock' },
                        { type: 'dynamicCta' },
                        { type: 'dataTable' },
                    ],
                },
                {
                    type: 'table',
                },
            ],
            group: 'content',
        },
        // This should be driven by taxonomy eventually
        {
            name: 'channelStyling',
            type: 'array',
            of: [{ type: 'stylingVariation' }],
        },
        {
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        },
        {
            name: 'taxonomy',
            title: 'Taxonomy',
            type: 'array',
            of: [{ type: 'taxonomyItem' }],
            group: 'taxonomy',
        },
        {
            name: 'seoData',
            title: 'SEO Data',
            type: 'seoData',
            group: 'seo',
        },
    ],
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true,
        },
        {
            name: 'seo',
            title: 'SEO',
        },
        {
            name: 'taxonomy',
            title: 'Taxonomy',
        },
    ],
}

/**
 * This is the object sent from Schwab with 'components' excluded for brevity
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
    contentType: 'string',
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
            duration: 'time',
            transcript: 'string-formatted',
            aspectRatio: 'string',
            attribution: 'string',
            caption: 'string-formatted',
            poster: {
                role: 'image',
                title: 'string',
                url: 'url',
                altText: 'string',
                attribution: 'string',
                aspectRatio: 'string',
                disclosure: 'string-formatted',
            },
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
                    parentTermUuid: 'GUID',
                    parentTermName: 'string',
                },
            ],
        },
    ],
    apiMetadata: {
        cacheTags: 'string',
        analytics: {
            adHocTags: [
                {
                    key: 'string',
                    value: 'string',
                },
            ],
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
