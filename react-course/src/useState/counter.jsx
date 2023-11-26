import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter+1)}>increment</button>
    </div>
  )
}

export default Counter