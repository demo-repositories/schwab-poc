import {useEffect} from 'react'

const MyComponent = (props) => {
  useEffect(() => {
    console.log('props', props)
  }, [props])
  return <div />
}

export default MyComponent
