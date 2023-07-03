import React, {useMemo, useState} from 'react'

export default function Memo() {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = slowFunction(number)
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
            width: '305px',
            height: '100px',
            padding: '25px'
        }
    }, [dark])

  return (
    <div className='MemoComponent'>
        <div>useMemo Hook: </div>
        <br />
        <div>
            <input type="number" value={number} 
                onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <br /><br />
            <div style={themeStyles}> The data is: {doubleNumber}</div>
            <br /><br />
            <hr />
        </div>
    </div>
  )
}

function slowFunction(num) {
    console.log('Calling the Slow function.')
    for (let i = 0; i <= 100000; i++) {}
    return num * 2
}