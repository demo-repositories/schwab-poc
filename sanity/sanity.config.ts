import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {table} from '@sanity/table'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Schwab POC',

  projectId: 'fvuvea00',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), table()],

  schema: {
    types: schemaTypes,
  },
})
