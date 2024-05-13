import { StringInputProps, set } from 'sanity'
import { Stack, Button, Grid, Label, Text } from '@sanity/ui'
import { createElement, useCallback } from 'react'
import { cardTypes } from '../../schemas/documents/card-deck'

export function CardTypeInput(props: StringInputProps) {
    const { value, onChange } = props
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            const nextValue = event.currentTarget.value
            onChange(set(nextValue))
        },
        [onChange]
    )

    return (
        <Grid columns={cardTypes.length} gap={3}>
            {cardTypes.map((plan) => (
                <Button
                    key={plan.value}
                    value={plan.value}
                    mode={value === plan.value ? `default` : `ghost`}
                    tone={value === plan.value ? `primary` : `default`}
                    onClick={handleClick}
                >
                    <Stack space={3} padding={1}>
                        <Text size={4} align="right">
                            {createElement(plan.icon)}
                        </Text>
                        <Label>{plan.title}</Label>
                        <Text size={1}>{plan.description}</Text>
                    </Stack>
                </Button>
            ))}
        </Grid>
    )
}
