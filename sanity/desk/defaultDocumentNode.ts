import { DefaultDocumentNodeResolver } from 'sanity/desk'
// import Iframe from 'sanity-plugin-iframe-pane'
import ParentAttributes from '../components/structure/parent-attributes'
/**
 * Overrides how the document editor appears for each document type.
 * Was used for old preview-kit way of doing things, but now is not imported
 */

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, props) => {
    const { schemaType } = props
    switch (schemaType) {
        // case `cardDeck`:
        //     // Preview pane
        //     return S.document().views([
        //         S.view.form(),
        //         S.view
        //             .component(Iframe)
        //             .options({
        //                 url: (doc) => {
        //                     const id = doc._id.replace('drafts.', '')
        //                     return `http://localhost:3000/api/draft?secret=MY_SECRET_TOKEN&path=/component-preview/${id}`
        //                 },
        //                 reload: {
        //                     button: true,
        //                 },
        //             })
        //             .title('Preview'),
        //     ])
        // All other document types just show the default
        default:
            return S.document().views([S.view.form()])
    }
}
