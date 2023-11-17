// locate.ts
import {
    DocumentLocationResolver,
    DocumentLocationsState,
} from 'sanity/presentation'
import { map, Observable } from 'rxjs'

export const locate: DocumentLocationResolver = (params, context) => {
    if (params.type === 'story' || params.type === 'landingPage') {
        /* 
        Listen to all changes in the selected document 
        and all documents that reference it
      */
        const doc$ = context.documentStore.listenQuery(
            `*[_id==$id || references($id)]{_type,slug,title}`,
            params,
            { perspective: 'previewDrafts' }
        ) as Observable<
            | {
                  _type: string
                  slug?: { current: string }
                  title?: string | null
                  name?: string | null
              }[]
            | null
        >
        // pipe the real-time results to RXJS's map function
        return doc$.pipe(
            map((docs) => {
                if (!docs) {
                    return {
                        message: 'Unable to map document type to locations',
                        tone: 'critical',
                    } satisfies DocumentLocationsState
                }
                const hrefLookup = ({ type, slug }) => {
                    const locations = {
                        story: `/story/${slug.current}`,
                        landingPage: `/${slug.current}`,
                    }
                    return locations[type]
                }
                const generateLocations = ({ type }) =>
                    docs
                        .filter(
                            ({ _type, slug }) => _type === type && slug?.current
                        )
                        .map(({ title, slug }) => ({
                            title: title || 'Title missing',
                            href: hrefLookup({ type, slug }),
                        }))

                // Generate all the locations for person documents
                const storyLocations = generateLocations({ type: 'story' })

                // Generate all the locations for post documents
                const pageLocations: Array<any> = generateLocations({
                    type: 'landingPage',
                })

                return {
                    locations: [
                        ...storyLocations,
                        ...pageLocations,
                        // Add a link to the "All posts" page when there are post documents
                        storyLocations.length > 0 && {
                            title: 'All stories',
                            href: '/story',
                        },
                        // Add a link to the "All authors" page when there are person documents
                        pageLocations.length > 0 && {
                            title: 'All pages',
                            href: '/pages',
                        },
                    ].filter(Boolean),
                } satisfies DocumentLocationsState
            })
        )
    }

    return null
}
