import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType }
) => {
    switch (schemaType) {
        case `story`:
            // Preview pane
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc) =>
                            `http://localhost:3000/api/draft?secret=MY_SECRET_TOKEN&path=/story/${doc.slug.current}`,
                        reload: {
                            button: true,
                        },
                    })
                    .title('Preview'),
            ])
        case `landingPage`:
            // Preview pane
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc) =>
                            `http://localhost:3000/api/draft?secret=MY_SECRET_TOKEN&path=/${doc.slug.current}`,
                        reload: {
                            button: true,
                        },
                    })
                    .title('Preview'),
            ])
        default:
            return S.document().views([S.view.form()])
    }
}
