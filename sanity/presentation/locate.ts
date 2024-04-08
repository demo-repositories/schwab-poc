import {
    DocumentLocation,
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
              _id: string
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

            const locations: DocumentLocation[] = []

            // Schema types for pages
            const pageTypes = ['story', 'landingPage']

            // Get URLs for various page types
            const hrefLookup = ({ type, slug }) => {
                const locations = {
                    story: `/story/${slug.current}`,
                    landingPage: `/${slug.current}`,
                }
                return locations[type]
            }
            // Create page locations for each page document
            const generatePageLocations = ({ type }) =>
                docs
                    .filter(
                        ({ _type, slug }) => _type === type && slug?.current
                    )
                    .map(({ title, slug }) => ({
                        title: title || 'Title missing',
                        href: hrefLookup({ type, slug }),
                    }))

            // Add page locations to locations array
            pageTypes.forEach((type) =>
                locations.push(...generatePageLocations(type))
            )

            // Schema types for components
            const componentTypes = [
                'bynderBlock',
                'dynamicCta',
                'cardDeck',
                'dataTable',
                'querySet',
            ]
            // Create location for component preview route
            const generateComponentLocations = ({ type }) =>
                docs
                    .filter(({ _type }) => _type === type)
                    .map(({ _id }) => ({
                        title: 'Preview component',
                        href: `/component-preview/${_id}`,
                    }))
            // Generate all the locations for components
            componentTypes.forEach((type) =>
                locations.push(...generateComponentLocations({ type }))
            )

            return {
                locations: locations.filter(Boolean),
            } satisfies DocumentLocationsState
        })
    )
}
