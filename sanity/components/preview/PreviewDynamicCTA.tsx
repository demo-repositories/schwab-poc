import type { PreviewProps } from 'sanity'
import { Card, Text, Heading, Button, Flex, Container } from '@sanity/ui'
/**
 * Used for showing an approximate recreation of the Dynamic CTA block in the portable text editor
 */
interface IPreviewDynamicCTA extends PreviewProps {
    heading: string
    buttonText: string
}

export function PreviewDynamicCTA(props: IPreviewDynamicCTA) {
    const { heading, buttonText } = props
    if (!heading || !buttonText) {
        return <Text>Dynamic CTA missing fields</Text>
    }
    return (
        <Card padding={[3, 5, 5]} radius={2} shadow={1} tone="positive">
            <Flex justify="center" align="center" direction="column">
                <Heading as="h4" size={2} style={{ display: 'block' }}>
                    {heading}
                </Heading>

                <Flex
                    justify="center"
                    align="center"
                    style={{ marginTop: '25px' }}
                >
                    <Container width={0}>
                        <Button
                            fontSize={[2, 2, 2]}
                            padding={[3, 3, 4]}
                            text={buttonText}
                        />
                    </Container>
                </Flex>
            </Flex>
        </Card>
    )
}
