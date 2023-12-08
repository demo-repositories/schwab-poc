import { set } from 'sanity'
import { Autocomplete, Stack, Box } from '@sanity/ui'
import { SearchIcon } from 'lucide-react'
import data from '../../data/stock-tickers.json'

export default function TickerSearch(props) {
    const { value, elementProps, onChange } = props

    const handleSelect = (event) => {
        onChange(set(value && value.length ? [...value, event] : [event]))
    }
    return (
        <Stack>
            <Box marginY={3}>
                <Autocomplete
                    fontSize={[2, 2, 3]}
                    icon={SearchIcon}
                    id="autocomplete-example"
                    options={data.map((item) => {
                        return {
                            value: item.Symbol,
                        }
                    })}
                    onSelect={(e) => handleSelect(e)}
                    placeholder="Search tickers or click 'Add item' below"
                    {...elementProps}
                />
            </Box>

            {/* <Container>
                {value &&
                    value.map((item) => {
                        return <Text key={item}>{item}</Text>
                    })}
            </Container> */}
            {props.renderDefault(props)}
        </Stack>
    )
}
