import { useEffect, useState } from 'react'
import { ObjectInputProps } from 'sanity'
import { Stack, Card, Text } from '@sanity/ui'
import { createClient } from '@sanity/client'
/**
 * Used to show additional info on taxonomyTerm documents
 */
const client = createClient({
    projectId: 'fvuvea00',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-11-01',
})

export default function ParentAttributes(props: ObjectInputProps) {
    const [data, setData] = useState([])
    const {
        value: { _id },
    } = props
    useEffect(() => {
        if (!data.length) {
            async function getData() {
                const data = await client.fetch(
                    `*[_type=='taxonomyAttribute' && $_id in values[]._ref]{values[]{...,}, _id, name}`,
                    { _id }
                )

                setData(data)
            }
            getData()
        }
    }, [])

    return (
        <>
            <Stack marginBottom={5}>{props.renderDefault(props)}</Stack>
            <Stack space={4}>
                <Text size={1} as="label">
                    Used on attributes:
                </Text>
                <Card tone={`transparent`} border padding={3} radius={2}>
                    <Stack>
                        {data &&
                            data.length > 0 &&
                            data.map(({ name, _id }) => {
                                return (
                                    <a
                                        href={`http://localhost:3333/structure/taxonomy;taxonomyAttributes;${_id}`}
                                    >
                                        <Card padding={4}>{name}</Card>
                                    </a>
                                )
                            })}
                    </Stack>
                </Card>
            </Stack>
        </>
    )
}
