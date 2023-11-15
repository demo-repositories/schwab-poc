/**
 * Wrapper for adding taxonomy attributes to documents
 */
import { Waypoints } from 'lucide-react'

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
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'taxonomyTerm' }],
                    options: {
                        disableNew: true,
                        /**
                         * This filter is assuming that this object is placed top-level in a document in a field named "taxonomy"
                         *
                         * To make this more global:
                         * 1. Parent is arr1
                         * 2. Loop through document + document children to see if any obj has type 'taxonomyAttribute' => check each against parent as arr2
                         * 3. Whatever matches becomes parentAttribute/parentParams below
                         *
                         */
                        filter: async ({ document, parent, getClient }) => {
                            // I don't believe this type of lookup is possible with Sanity but this filter for options should suffice for now
                            const { taxonomy } = document
                            const missingTerms = taxonomy.filter((item) => {
                                return !item.hasOwnProperty('terms')
                            })

                            // If several items dont have terms (I dont think) we can tell which item is our parent, so return everything as a fallback
                            if (missingTerms.length > 1) {
                                return {
                                    filter: '_type=="taxonomyTerm" && defined(_id)',
                                    params: {},
                                }
                            }

                            // Compare each taxonomyItem's "terms" array's entries with our "parent" object to find the right item to lookup
                            const parentAttribute = taxonomy.filter((item) => {
                                return compareTwoArraysOfObjects(
                                    item.terms,
                                    parent
                                )
                            })[0].taxonomyAttribute

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
            title: 'taxonomyAttribute.name',
        },
    },
}
