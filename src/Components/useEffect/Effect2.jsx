import React, {useEffect, useState} from 'react'

function Effect2() {

    const [count, setCount] = useState(0)

    // For Mounting The Component :
    useEffect(() => {
        console.log("Component Created Successfully.")
    })

    // For updating The Component :
    useEffect(() => {
        console.log("Component Updated Successfully.")
    }, [count])

    // For UnMounting The Component :
    useEffect(() => {
        return () => {
            console.log("Component Unmounted Successfully.")
        }
    })

  return (
    <div>
        <div>useEffect Hook file 2:</div>
        <br />
        <div>Count in UseEffect file 2: {count}</div>
        <br />
        <button onClick={() => setCount(prevCount => prevCount + 1)}>increment</button>
        <hr />
    </div>
  )
}

export default Effect2

/*
This code output:
    Component Created Successfully.
    Component Updated Successfully. (on count update)
    Component Unmounted Successfully. (when unmounting the component)
*/

/*
When the browser runs the code for the first time and renders the Effect2 component, the following console output will be logged:
Component Created Successfully.

This is because the first useEffect hook with no dependency array is called during the mounting phase, 
and it runs only once when the component is created.

If you then click the "increment" button and update the count state, 
the following console output will be logged:

Component Updated Successfully.

This is because the second useEffect hook has a dependency array containing the count variable. 
It will be called whenever count changes, which happens when you click the "increment" button.

If you navigate away from the component or remove it from the DOM, the following console output will be logged:

Component Unmounted Successfully.

This is because the cleanup function returned from the first useEffect hook is called when the component is unmounted.
*/