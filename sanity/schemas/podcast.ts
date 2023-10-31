/**
 * Example schema
 * {
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
    }
 */

import { Podcast } from 'lucide-react';

export default {
  name: 'podcast',
  type: 'document',
  title: 'Podcast',
  icon: Podcast,
  fields: [
    {
      name: 'origin',
      type: 'string',
      title: 'Origin',
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
      name: 'playerUrl',
      type: 'url',
      title: 'Player URL',
    },
    // Does 'type' have set options?
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      initialValue: 'update-me',
      options: {
        list: [
          { title: 'What are the types?', value: 'update-me' },

          { title: 'General story', value: 'general-story' },
          { title: 'Podcast', value: 'podcast' },
        ],
      },
    },
    {
      name: 'show',
      type: 'string',
      title: 'Show',
    },
    { name: 'episode', type: 'number', title: 'Episode' },
    { name: 'length', type: 'number', title: 'Length' },
    { name: 'appleStoreUrl', type: 'url', title: 'Apple Store URL' },
    { name: 'googleStoreUrl', type: 'url', title: 'Google Store URL' },
    { name: 'spotifyUrl', type: 'url', title: 'Spotify URL' },
    { name: 'rssUrl', type: 'url', title: 'RSS URL' },
    {
      name: 'transcript', type: 'array', of: [{ type: 'block' }], title: 'Transcript',
    },
  ],
};
