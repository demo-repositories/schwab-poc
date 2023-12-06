import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

/**
 * Overrides how the document editor appears for each document type.
 * Was used for old preview-kit way of doing things, but now is not imported
 */

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType }
) => {
    switch (schemaType) {
        // Both 'story' and 'landingPage' get the preview iframe
        case `cardDeck`:
            // Preview pane
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc) =>
                            `http://localhost:3000/api/draft?secret=MY_SECRET_TOKEN&path=/component-preview/${doc._id}`,
                        reload: {
                            button: true,
                        },
                    })
                    .title('Preview'),
            ])

        // All other document types just show the default
        default:
            return S.document().views([S.view.form()])
    }
}
