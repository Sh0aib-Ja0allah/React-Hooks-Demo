import './App.css'
// import Callback from './Components/useCallback/Callback'
import ContextClass from './Components/useContext/ContextClass'
import ContextHook from './Components/useContext/ContextHook'
// components :
import Effect from './Components/useEffect/Effect'
import Effect2 from './Components/useEffect/Effect2'
import Memo from './Components/useMemo/Memo'
import Reducer from './Components/useReducer/Reducer'
import Ref from './Components/useRef/Ref'
import State from './Components/useState/State'
import React, { useState } from 'react'

// create context:
export const ThemeContext = React.createContext()

function App() {

  const [dark, setDark] = useState(false)

  function toggleTheme () {
    setDark(prevDark => !prevDark)
  }

  return (
    <div className="App">
        <ThemeContext.Provider value={dark}>
        <State />
        <Effect />
        <Effect2 />
        <Memo />
        <Ref />
        useContext Hook:<br/> 
        <br />
        <button onClick={toggleTheme}>Dark theme</button>
        <ContextClass />
        <ContextHook />
        <Reducer />
        {/* <Callback /> */}
      </ThemeContext.Provider>
    </div>
  )
}

export default App