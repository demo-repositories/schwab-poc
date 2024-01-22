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

// URL to be used for previewing in presentation
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
            // Override the layout of our studio and the document editor
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
        // GROQ query sandbox
        visionTool(),
        // Table type used in stories
        table(),
        // Get images from unsplash
        unsplashImageAsset(),
        // Get any asset from bynder
        bynderInputPlugin({
            portalDomain:
                process.env.BYNDER_PORTAL_DOMAIN ||
                'https://wave-trial.getbynder.com/',
        }),
        // Allow scheduled publishing
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
    // Alternate way to override default document editor UI. Used for 'taxonomyTerm'
    form: {
        components: {
            input: (props) => {
                // Override root document component for taxonomyTerms
                if (
                    props.id === 'root' &&
                    props.schemaType.type?.name === 'document' &&
                    props.schemaType.name === 'taxonomyTerm'
                ) {
                    return ParentAttributes(props)
                }
                // All other documents do the default
                return props.renderDefault(props)
            },
        },
    },
})
