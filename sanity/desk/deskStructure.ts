import { BookText, Layout, Boxes, Waypoints, WholeWord } from 'lucide-react'
import { ConfigContext } from 'sanity'
import { StructureBuilder } from 'sanity/structure'

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
                    S.documentTypeList('story').title('All stories').child()
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
                    ].includes(listItem.getId())
            ),
        ])
}
