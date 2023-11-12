import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { table } from '@sanity/table'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { bynderInputPlugin } from 'sanity-plugin-bynder-input'
import { schemaTypes } from './schemas'
import { defaultDocumentNode } from './desk/defaultDocumentNode'
import { deskStructure } from './desk/deskStructure'
import SchwabLogo from './components/SchwabLogo'

export default defineConfig({
    name: 'default',
    title: 'Schwab POC',
    icon: SchwabLogo,
    projectId: 'fvuvea00',
    dataset: 'production',

    plugins: [
        deskTool({
            defaultDocumentNode,
            structure: deskStructure,
        }),
        visionTool(),
        table(),
        unsplashImageAsset(),
        bynderInputPlugin({
            portalDomain: 'https://wave-trial.getbynder.com/',
        }),
    ],

    schema: {
        types: schemaTypes,
    },
})
