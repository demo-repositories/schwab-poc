import { DefaultDocumentNodeResolver } from 'sanity/structure'
//...your other desk structure imports...
import {
    TranslationsTab,
    defaultDocumentLevelConfig,
} from 'sanity-plugin-studio-smartling'
//if you are using field-level translations, you can import the field-level config instead:
//import {TranslationsTab, defaultFieldLevelConfig} from 'sanity-plugin-studio-smartling'
//if you're not sure which, please look at the document-level and field-level sections below

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType }
) => {
    if (schemaType === 'story') {
        return S.document().views([
            S.view.form(),
            //...my other views -- for example, live preview, document pane, etc.,
            S.view
                .component(TranslationsTab)
                .title('Smartling')
                .options(defaultDocumentLevelConfig),
            //again, if you're using field-level translations, you can use the field-level config instead:
            //S.view.component(TranslationsTab).title('Smartling').options(defaultFieldLevelConfig)
        ])
    }
    return S.document()
}
