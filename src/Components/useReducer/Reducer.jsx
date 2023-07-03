import React, {useReducer} from 'react'

function reducer (state, action) {
    switch (action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'incrementFive':
            return {count: state.count + 5}
        case 'decrementFive':
            return {count: state.count - 5}
        default:
            return state
    }
}

function Reducer() {

    const [state, dispatch] = useReducer(reducer, {count: 0})
    /* state is our state, 
    count is the variable we want to change, 
    reduce is our action,
    dispatch is a function to update our state.
    */

    const incrementCount = () => {
        dispatch({type: 'increment'})
    }

    const decrementCount = () => {
        dispatch({type: 'decrement'})
    }

    const incrementFive = () => {
        dispatch({type: 'incrementFive'})
    }
    
    const decrementFive = () => {
        dispatch({type: 'decrementFive'})
    }
    
    const row = {
        display : 'flex',
        flexDirection : 'row',
        justifyContent: 'space-evenly'
    }

  return (
    <div className='ReducerComponent'>
        <br />
        <div>useReducer Hook:</div>
        <br />
        <br />
        <div style={row}>
            <button onClick={incrementCount}>increment</button>
            <button onClick={incrementFive}>increment Five</button>
            <div>The current count is: {state.count}</div>
            <button onClick={decrementCount}>decrement</button>
            <button onClick={decrementFive}>decrement Five</button>
        </div>
        <br />
        <hr />
    </div>
  )
}

export default Reducer