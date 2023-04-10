import React, {useState}  from 'react'

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
        <div>CounterComponent</div>
        <p>{counter}</p>
        <button onClick={DecrementalFunction}>-1</button>
        <button onClick={IncrementalFunction}>+1</button>
    </React.Fragment>
  )
}

export default CounterComponent