import React, { useEffect, useRef, useState } from 'react'

function Ref() {

    const [name, setName] = useState('')
    const count = useRef(0)
    const inputRef = useRef()

    useEffect(() => {
       count.current = count.current + 1
    })

    function focus () {
        inputRef.current.focus()
        inputRef.current.value = 'some value' 
    }

  return (
    <div className='RefComponent'>
        <div>useRef Hook:</div>
        <br />
        <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
        <div>my name is: {name}</div>
        <button onClick={focus}>Focus</button>
        <br />
        <div>Rendered {count.current} times.</div>
        <hr />
    </div>
  )
}

export default Ref