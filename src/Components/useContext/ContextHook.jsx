import React, {useContext} from 'react'
import { ThemeContext } from '../../App'

function ContextHook() {

  const dark = useContext(ThemeContext)

  const ComponentStyling = {
    backgroundColor: dark?  'black' : 'white',
    color: dark ? 'white' : 'black',
    padding: '2rem',
    margin: '2rem',
    width: '300px',
    height: '80px',
    textAlign: 'center',
}

  return (
    <>
      <div style={ComponentStyling }>
        Function Component.
      </div>
      <hr />
    </>
  )
}

export default ContextHook