import { BookText, Layout, Boxes, Waypoints, WholeWord } from 'lucide-react'
import { ConfigContext } from 'sanity'
import { StructureBuilder } from 'sanity/structure'
import { supportedLanguages } from '../sanity.config'

/**
 * Customizes which documents appear in 'Content', and the order they appear in.
 *
 * What does and does not work for studio layouts is super subjective, so the Schwab team should feel free to customize this to suit their needs.
 *
 * My personal logic for this first iteration of the layout is to have all document types responsible for 'pages' on the website in a group, followed by a group for taxonomy, and finally all other new document types will be added to the bottom of the list.
 */
export const deskStructure = (S: StructureBuilder, context: ConfigContext) => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Landing pages')
                .icon(Layout)
                .child(
                    S.documentTypeList('landingPage').title('All pages').child()
                ),
            S.listItem()
                .title('Stories')
                .icon(BookText)
                .child(
                    // S.documentTypeList('story').title('All stories').child()
                    S.list()
                        .title('Stories')
                        .items([
                            ...supportedLanguages.map((language) =>
                                S.listItem()
                                    .title(
                                        `Stories (${language.id.toLocaleUpperCase()})`
                                    )
                                    .schemaType('story')

                                    .child(
                                        S.documentList()
                                            .id(language.id)
                                            .title(`${language.title} Stories`)
                                            .schemaType('story')
                                            .filter(
                                                '_type == "story" && language == $language'
                                            )
                                            .params({ language: language.id })
                                            .initialValueTemplates([
                                                S.initialValueTemplateItem(
                                                    'story-language',
                                                    {
                                                        id: 'story-language',
                                                        language: language.id,
                                                    }
                                                ),
                                            ])
                                            .canHandleIntent(
                                                (intentName, params) => {
                                                    // TODO: Handle **existing** documents (like search results when clicked)
                                                    // to return `true` on the correct language list!
                                                    if (intentName === 'edit') {
                                                        // return params?.language === language.id
                                                        return false
                                                    }

                                                    // Not an initial value template
                                                    if (!params.template) {
                                                        return true
                                                    }

                                                    // Template name structure example: "lesson-en"
                                                    const languageValue =
                                                        params?.template
                                                            ?.split(`-`)
                                                            .pop()

                                                    return (
                                                        languageValue ===
                                                        language.id
                                                    )
                                                }
                                            )
                                    )
                            ),
                            // I have only added this item so that search results when clicked will load this list
                            // If the intent checker above could account for it, I'd remove this item
                            S.divider(),
                            S.listItem()
                                .title(`All Stories`)
                                .schemaType('story')

                                .child(
                                    S.documentList()
                                        .id(`all-stories`)
                                        .title(`All Stories`)
                                        .schemaType('story')
                                        .filter('_type == "story"')
                                        // Load this pane for existing `story` documents
                                        // or new documents that aren't using an initial value template
                                        .canHandleIntent(
                                            (intentName, params) =>
                                                intentName === 'edit' ||
                                                params.template === `story`
                                        )
                                ),
                        ])
                ),
            S.divider(),
            S.listItem()
                .title('Taxonomy')
                .icon(Boxes)
                .child(
                    S.list()
                        .title('Taxonomy')
                        .items([
                            S.listItem()
                                .title('Taxonomy attributes')
                                .icon(Waypoints)
                                .child(
                                    S.documentTypeList('taxonomyAttribute')
                                        .title('Taxonomy attributes')
                                        .child()
                                ),
                            S.listItem()
                                .title('Taxonomy terms')
                                .icon(WholeWord)
                                .child(
                                    S.documentTypeList('taxonomyTerm')
                                        .title('Taxonomy terms')
                                        .child()
                                ),
                            S.divider(),
                            S.listItem()
                                .title('Concept')

                                .child(
                                    S.documentTypeList('skosConcept')
                                        .title('Concept')
                                        .child()
                                ),
                            S.listItem()
                                .title('Concept scheme')

                                .child(
                                    S.documentTypeList('skosConceptScheme')
                                        .title('Concept scheme')
                                        .child()
                                ),
                        ])
                ),
            S.divider(),
            // Adds all other document types besides those above, so they're immediately editable as they're added
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        'story',
                        'landingPage',
                        'taxonomyAttribute',
                        'taxonomyTerm',
                        'skosConcept',
                        'skosConceptScheme',
                    ].includes(listItem.getId())
            ),
        ])
}
