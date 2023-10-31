import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {workflow} from 'sanity-plugin-workflow'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Schwab POC',

  projectId: '0a4ypare',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => structure(S),
    }),
    media(),
    workflow({schemaTypes: ['story']}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
