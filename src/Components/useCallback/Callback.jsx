import React, { useState, useCallback } from 'react'
import List from './List.jsx'

function Callback() {

    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const geItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    const theme = {
        backgroundColor: dark ?  'black' : 'white',
        color: dark ? 'white' : 'black',
    }

  return (
    <div style={theme}>
        <div>useCallback Hook:</div>
        <br />
        <div>
            <input type='number' value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={setDark(prevDark => !prevDark)} >
                Toggle theme
            </button>
            <List geItems={geItems} />
        </div>
    </div>
  )
}

export default Callback