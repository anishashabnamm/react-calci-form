import React, {useState}  from 'react'
import './CounterComponent.css'
function CounterComponent() {
    const [counter, setCounter]=useState(0);
    function IncrementalFunction()
    {
      setCounter (counter+1);
    }
    function DecrementalFunction()
    {
      setCounter (counter-1)
    }
  return (
    <React.Fragment>
        <div className='counter'>
        <p>{counter}</p>
        <button onClick={DecrementalFunction}>-1</button>
        <button onClick={IncrementalFunction}>+1</button>
        </div>
    </React.Fragment>
  )
}

export default CounterComponent