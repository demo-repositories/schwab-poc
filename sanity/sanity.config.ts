import { createClient } from '@sanity/client'
import { Component, LayoutGrid, Image, MousePointerSquare } from 'lucide-react'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
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
// import { defaultDocumentNode } from './desk/defaultDocumentNode'
import ParentAttributes from './components/inputs/parent-attributes'
import { assist } from '@sanity/assist'
import { taxonomyManager } from 'sanity-plugin-taxonomy-manager'

// URL to be used for previewing in presentation
const SANITY_STUDIO_PREVIEW_URL =
    process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'

// Init client to get user role for showing/hiding workspaces
const client = createClient({
    projectId: 'fvuvea00',
    dataset: 'production',
    useCdn: false,
})

const currentUser = await client.request({
    uri: '/users/me',
    withCredentials: true,
})

// Add special tools for administrators
const adminTools = currentUser.role == 'administrator' ? [visionTool()] : []

const sharedConfig = {
    icon: SchwabLogo,
    projectId: 'fvuvea00',
    dataset: 'production',
    plugins: [
        structureTool({
            // Override the layout of our studio and the document editor
            structure: deskStructure,
            // defaultDocumentNode: defaultDocumentNode,
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
        ...adminTools,
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
        taxonomyManager({ baseUri: 'https://www.schwab.com/vocab/' }),
        assist(),
    ],
    document: {
        unstable_comments: {
            enabled: true, // Comments enabled
        },
    },
    schema: {
        types: schemaTypes,
        templates: (prev) => [
            ...prev,
            // Preset template for icon card
            {
                id: 'icon-card-deck',
                title: 'Icon card',
                schemaType: 'cardDeck',
                icon: Image,
                value: {
                    cardType: 'iconCard',
                    cards: [
                        {
                            _type: 'card',
                            body: [
                                {
                                    _type: 'block',
                                    children: [
                                        {
                                            _type: 'span',
                                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                                        },
                                    ],
                                    markDefs: [],
                                },
                            ],
                            icon: {
                                _type: 'image',
                                altText: 'hourglass icon',
                                asset: {
                                    _ref: 'image-675766bf1420cc1413ef6b01490f8754337e3c8f-72x72-png',
                                    _type: 'reference',
                                },
                            },
                        },
                    ],
                },
            },
            {
                id: 'cta-card-deck',
                title: 'CTA card',
                schemaType: 'cardDeck',
                icon: MousePointerSquare,
                value: {
                    cardType: 'ctaCard',
                },
            },
        ],
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
}
const allConfigs = [
    {
        name: 'default',
        title: 'Schwab POC',
        basePath: '/default',
    },
    {
        name: 'charitable',
        title: 'Charitable',
        basePath: '/charitable',
    },
].map((config) => {
    // Merge different configs with shared config
    return {
        ...sharedConfig,
        ...config,
    }
})
const editorConfigs = allConfigs.filter(
    (config) => config.name !== 'charitable'
)
// return all workspaces for admins
const configs =
    currentUser.role === 'administrator' ? allConfigs : editorConfigs
export default defineConfig(configs)
