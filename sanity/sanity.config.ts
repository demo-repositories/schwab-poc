import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { presentationTool } from 'sanity/presentation'
import { visionTool } from '@sanity/vision'
import {
    dashboardTool,
    projectUsersWidget,
    projectInfoWidget,
} from '@sanity/dashboard'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'
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
        dashboardTool({
            widgets: [
                projectInfoWidget(),
                projectUsersWidget(),
                documentListWidget({
                    title: 'Last edited landing pages',
                    order: '_updatedAt desc',
                    types: ['landingPage'],
                    layout: { width: 'small' },
                }),
                documentListWidget({
                    title: 'Last edited stories',
                    order: '_updatedAt desc',
                    types: ['story'],
                    layout: { width: 'small' },
                }),
            ],
        }),
        deskTool({
            structure: deskStructure,
        }),
        presentationTool({
            // Required: set the base URL to the preview location in the front end
            previewUrl: SANITY_STUDIO_PREVIEW_URL,
            locate,
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
