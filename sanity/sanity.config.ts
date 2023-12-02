import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { presentationTool } from 'sanity/presentation'
import { visionTool } from '@sanity/vision'
import { scheduledPublishing } from '@sanity/scheduled-publishing'
import { table } from '@sanity/table'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { bynderInputPlugin } from 'sanity-plugin-bynder-input'
import { schemaTypes } from './schemas'

import { deskStructure } from './desk/deskStructure'
import SchwabLogo from './components/SchwabLogo'
import { locate } from './presentation/locate'

const SANITY_STUDIO_PREVIEW_URL =
    process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
export default defineConfig({
    name: 'default',
    title: 'Schwab POC',
    icon: SchwabLogo,
    projectId: 'fvuvea00',
    dataset: 'production',
    plugins: [
        deskTool({
            structure: deskStructure,
        }),
        presentationTool({
            // Required: set the base URL to the preview location in the front end
            previewUrl: {
                origin: SANITY_STUDIO_PREVIEW_URL,
                draftMode: {
                    enable: '/api/draft',
                },
            },
            locate,
        }),
        visionTool(),
        table(),
        unsplashImageAsset(),
        bynderInputPlugin({
            portalDomain: 'https://wave-trial.getbynder.com/',
        }),
        scheduledPublishing(),
    ],
    document: {
        unstable_comments: {
            enabled: true, // Comments enabled
        },
    },
    schema: {
        types: schemaTypes,
    },
})
