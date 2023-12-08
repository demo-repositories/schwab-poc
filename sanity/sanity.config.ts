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
import { defaultDocumentNode } from './desk/defaultDocumentNode'
import ParentAttributes from './components/inputs/parent-attributes'

const SANITY_STUDIO_PREVIEW_URL =
    process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
export default defineConfig({
    name: 'default',
    title: 'Schwab POC',
    icon: SchwabLogo,
    projectId: process.env.SANITY_PROJECT_ID || 'fvuvea00',
    dataset: 'production',
    plugins: [
        deskTool({
            structure: deskStructure,
            defaultDocumentNode: defaultDocumentNode,
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
    form: {
        components: {
            input: (props) => {
                if (
                    props.id === 'root' &&
                    props.schemaType.type?.name === 'document' &&
                    props.schemaType.name === 'taxonomyTerm'
                ) {
                    return ParentAttributes(props)
                }

                return props.renderDefault(props)
            },
        },
    },
})
