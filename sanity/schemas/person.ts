/**
 * Example schema
 * {
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
 */
import { User } from 'lucide-react';

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: User,
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'First name',
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
};
