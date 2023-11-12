import { BookText, Layout, Boxes, Waypoints, WholeWord } from 'lucide-react'
export const deskStructure = (S) =>
    S.list()
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
        ])
