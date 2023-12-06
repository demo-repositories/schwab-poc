/**
 * Wrapper for adding taxonomy attributes to documents
 */
import { Waypoints } from 'lucide-react'
import { Rule } from 'sanity'

const compareTwoArraysOfObjects = (arr1: object[], arr2: object[]) => {
    return (
        arr1.length === arr2.length &&
        arr1.every((arr1Obj) =>
            arr2.some((arr2Obj) =>
                Object.keys(arr1Obj).every(
                    (key) => arr1Obj[key] === arr2Obj[key]
                )
            )
        )
    )
}

export default {
    name: 'taxonomyItem',
    title: 'Taxonomy item',
    type: 'object',
    icon: Waypoints,
    fields: [
        {
            name: 'taxonomyAttribute',
            title: 'Taxonomy attribute',
            type: 'reference',
            to: [{ type: 'taxonomyAttribute' }],
        },
        {
            name: 'terms',
            title: 'Terms',
            type: 'array',
            description:
                'Options under "Add item" pre-populated based on "Taxonomy attribute" above',
            validation: (rule: Rule) => rule.min(1),
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'taxonomyTerm' }],
                    options: {
                        disableNew: true,
                        filter: async ({ document, parent, getClient }) => {
                            const documentItems = []
                            // Woof and I'm sorry
                            function getTaxonomyItems(obj) {
                                for (var property in obj) {
                                    if (
                                        property == '_type' &&
                                        obj[property] == 'taxonomyItem'
                                    ) {
                                        return documentItems.push(obj)
                                    }
                                    if (Array.isArray(obj[property])) {
                                        for (let item in obj[property]) {
                                            getTaxonomyItems(
                                                obj[property][item]
                                            )
                                        }
                                    }
                                    if (
                                        typeof obj[property] == 'object' &&
                                        !Array.isArray(obj[property])
                                    ) {
                                        getTaxonomyItems(obj[property])
                                    }
                                }
                            }
                            getTaxonomyItems(document)

                            // Compare each taxonomyItem's "terms" array's entries with our "parent" object to find the right item to lookup
                            const parentAttribute = documentItems.filter(
                                (item) => {
                                    if (!item.terms) return false
                                    return compareTwoArraysOfObjects(
                                        item.terms,
                                        parent
                                    )
                                }
                            )[0].taxonomyAttribute

                            const client = getClient({
                                apiVersion: '2023-11-10',
                            })

                            // Get our parent taxonomyAttribute's "values" field to know what _ids to query for in the filter
                            const parentQuery =
                                '*[_type=="taxonomyAttribute" && _id == $ref]{values[]{_ref}}'
                            const parentParams = { ref: parentAttribute._ref }
                            const parentValues = await client
                                .fetch(parentQuery, parentParams)
                                .then((data) => {
                                    return data[0].values.map((ref) => ref._ref)
                                })

                            return {
                                filter: '_type=="taxonomyTerm" && _id in $ids',
                                params: {
                                    ids: parentValues,
                                },
                            }
                        },
                    },
                },
            ],
        },
    ],

    preview: {
        select: {
            subtitle: 'taxonomyAttribute.name',
            term0: 'terms.0.name',
            term1: 'terms.1.name',
            term2: 'terms.2.name',
            term3: 'terms.3.name',
        },
        prepare({ subtitle, term0, term1, term2, term3 }) {
            const terms = [term0, term1, term2].filter(Boolean)
            const hasMoreTerms = Boolean(term3)

            const title = terms.length > 0 ? `${terms.join(', ')}` : ''

            return {
                title: hasMoreTerms ? `${title}...` : title,
                subtitle: subtitle,
            }
        },
    },
}
