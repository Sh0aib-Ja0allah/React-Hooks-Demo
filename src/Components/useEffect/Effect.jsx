import React, {useState, useEffect} from 'react'
import './Effect.css'
import axios from 'axios' 

function Effect() {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [count, setCount] = useState(0)
  // create a state named posts for data fetching: 
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [id, setId] = useState()
  const [onClickId, setOnClickId] = useState()

  // useEffect hook for the seconds variable:
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => (seconds + 1) % 60)
    }, 1000)
  
    return () => clearInterval(interval);
  }, [])

  // useEffect hook for the minutes variable:
  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((minutes) => (minutes + 1) % 60)
    }, 59000)
  
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    document.title = `count = ${count} `
  })

  // fetch all data from an api using axios package:
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response)
      setUsers(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  // fetch one data data from an api using axios package:
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${onClickId}`)
    .then(res => {
      console.log(res)
      setUser(res.data)
    })
    .catch(err => {
      console.log(err)
    }, [onClickId])
  })

  // function for the id button:
  const handleClick = () => {
    setOnClickId(id)
  }

  return (
    <div className='Effect'>
      <div>useEffect + useState Hooks:</div>
      <div>
        <div className='Row'>Timer = {minutes} : {seconds}</div>
      </div>
      <div className='Row'>
        <button onClick={() => setCount(count + 1)} > increment count: {count}</button>
        <div># For the page title</div>
      </div>
      <br />
      <div># To fitch all data from the api : <br /><br /> </div>
      {
        users.map(user => (
          <div key={user.id}>
            name: {user.name},
            email: {user.email},
            website: {user.website}
            <hr />
          </div>
        ))
      }
      <br />
      <br />
      <hr />
      <div>
        <div> # To fetch api data for one user : </div>
        <div className='Row'>
          <input type="text" placeholder='please enter your wanted id' value={id} onChange={e => setId(e.target.value)} />
          <button type='text' onClick={handleClick} >Fetch Id</button>
        </div>
        <div key={user.id}>
          name: {user.name},
          email: {user.email},
          website: {user.website}
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Effect

// install axios package:
// npm install axios