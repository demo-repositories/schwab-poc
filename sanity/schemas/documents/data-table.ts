import { Table } from 'lucide-react'
import TickerSearch from '../../components/inputs/ticker-search'
import data from '../../data/stock-tickers.json'

export default {
    name: 'dataTable',
    title: 'Data table',
    type: 'document',
    icon: Table,
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'tableType',
            title: 'Table type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Ticker comparison',
                        value: 'tickerComparison',
                    },
                ],
            },
        },

        {
            name: 'tickers',
            title: 'Tickers',
            type: 'array',
            of: [
                {
                    type: 'string',
                    options: {
                        list: data.map((item) => {
                            return {
                                title: `${item.Symbol} - ${item.Name}`,
                                value: item.Symbol,
                            }
                        }),
                    },
                },
            ],

            hidden: ({ parent }) => parent?.tableType !== 'tickerComparison',
            components: {
                input: TickerSearch,
            },
        },
        {
            name: 'columnHeaders',
            title: 'Column headers',
            type: 'array',
            description: 'Ticker name will always be shown',
            of: [
                {
                    type: 'string',
                    options: {
                        list: Object.keys(data[0])
                            .filter((str) => {
                                const skip = ['Symbol', 'Name']
                                return !skip.includes(str)
                            })
                            .map((str) => {
                                return {
                                    title: str,
                                    value: str,
                                }
                            }),
                    },
                },
            ],
        },

        // {
        //     name: 'hrefOverride',
        //     title: 'HREF Override',
        //     type: 'url',
        //     description:
        //         'Use when linking externally. Will override any value in "to"',
        //     hidden: ({ parent }) => parent?.linkType !== 'external',
        // },
    ],
}
