import { defineCliConfig } from 'sanity/cli'
// Config file used by the Sanity CLI https://www.sanity.io/docs/cli#4baf8325e0e3
export default defineCliConfig({
    api: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
    },
})
