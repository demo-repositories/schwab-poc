/**
 * Example schema
 * {
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
    }
 */

import { FileAudio2 } from 'lucide-react';
export default {
  name: 'audio',
  type: 'document',
  title: 'Audio',
  icon: FileAudio2,
  fields: [
    {
      name: 'file',
      type: 'file',
      title: 'File',
      accept: 'audio/*',
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
    {
      name: 'transcript', type: 'array', of: [{ type: 'block' }], title: 'Transcript',
    },
    {
      name: 'caption', type: 'array', of: [{ type: 'block' }], title: 'Caption',
    },
  ],
};
