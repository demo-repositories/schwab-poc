import {
    DocumentLocationResolver,
    DocumentLocationsState,
} from 'sanity/presentation'
import { map, Observable } from 'rxjs'
/**
 * Tell Sanity's presentation tool where our documents live on the front-end
 */
export const locate: DocumentLocationResolver = (params, context) => {
    /* 
        Listen to all changes in the selected document 
        and all documents that reference it
      */
    const doc$ = context.documentStore.listenQuery(
        `*[_id==$id || references($id)]{_type,slug,title,_id}`,
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
    // Pipe the real-time results to RXJS's map function
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
            const generatePageLocations = ({ type }) =>
                docs
                    .filter(
                        ({ _type, slug }) => _type === type && slug?.current
                    )
                    .map(({ title, slug }) => ({
                        title: title || 'Title missing',
                        href: hrefLookup({ type, slug }),
                    }))

            // Generate all the locations for story documents
            const storyLocations = generatePageLocations({ type: 'story' })

            // Generate all the locations for page documents
            const pageLocations: Array<any> = generatePageLocations({
                type: 'landingPage',
            })

            return {
                locations: [...storyLocations, ...pageLocations].filter(
                    Boolean
                ),
            } satisfies DocumentLocationsState
        })
    )
}
