/**
 * Example schema
 * {
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
 */

import { FileImage } from 'lucide-react';

export default {
  name: 'accessibleImage',
  type: 'document',
  title: 'Accessible Image',
  icon: FileImage,
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
        {
          name: 'disclosure',
          type: 'string',
          title: 'Disclosure',
        },
      ],
    },
  ],
};
