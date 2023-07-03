import React, {useState} from 'react'
import './State.css'

function indexFunction () {
  console.log("The Index state is ready to use")
  return 0
}

function State() {

  // with the arrow function:
  const [count, setCount] = useState(() => {
    console.log("First counter created.")
    return 0
  })
  const [massage, setMassage] = useState('')
  const [text, setText] = useState('')
  // with the common function:
  const [index, setIndex] = useState(indexFunction())

  const changeMassage = (e) => {
    setMassage(e.target.value)
  }

  const clickButton = () => {
    setText(massage)
    setMassage('')
  }

  const people = 
  [
    {
      name: 'Ayman Rabaya',
      location: 'Mithaloon',
      university: 'AAUP'
    },
    {
      name: 'Shoaib Jadallah',
      location: 'Nablus',
      university: 'BZU'
    },
    {
      name: 'Zakaria wild Ali',
      location: 'Sanur',
      university: 'AAUP'
    },
    {
      name: 'Hadi Qadir',
      location: 'canada',
      university: 'Unknown'
    }
  ]

  const nextPerson = () => {
    setIndex((index) => (index + 1) % people.length) // it's used to increment the index with insurance that the index count in the valid range.
  }

  return (
    <div className='State'>
      <div>UseState Hook: </div>
      <div className="Row">
        <button onClick={() => setCount(count + 1)}>Increment count</button>
        <div>Your count right now is: {count}</div>
      </div>
      <div className="Row">
        <button onClick={() => setCount(count - 1)}>Decrement count</button>
        <div>Your count right now is: {count}</div>
      </div>
      <div className='Row' >
          <input onChange={changeMassage} value={massage} className='input' type='text' placeholder='please enter your text' />
          <button type='submit' onClick={clickButton} >Submit</button>
      </div>
      <div className='Row'>your text is: {text} </div>
      <div className='Row'>
        <button onClick={nextPerson}>Next</button>
        <div className="data">
          Name: {people[index].name},<br />
          address: {people[index].location},<br />
          University: {people[index].university}.
        </div>
      </div>
      <hr />
    </div>
  )
}

export default State
