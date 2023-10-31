/**
 * Example schema
 *
 * {
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
    }
 *
 */

import { FileVideo2 } from 'lucide-react';
export default {
  name: 'video',
  type: 'document',
  title: 'Video',
  icon: FileVideo2,
  fields: [
    {
      name: 'file',
      type: 'file',
      title: 'File',
      accept: 'video/*',
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
      name: 'srt',
      type: 'url',
      title: 'SRT',
    },
    {
      name: 'caption', type: 'array', of: [{ type: 'block' }], title: 'Caption',
    },
    {
      name: 'poster',
      type: 'image',
      title: 'Poster',
      fields: [
        // Was included in the API spec but could be just gotten from the video
        // {
        //   name: 'duration',
        //   type: 'number',
        //   title: 'Duration',
        // },
        {
          name: 'transcript', type: 'array', of: [{ type: 'block' }], title: 'Transcript',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
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
      name: 'disclosure', type: 'array', of: [{ type: 'block' }], title: 'Disclosure',
    },
  ],
};
