import React , { useState }from 'react'

const ImprovedCounter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
      if (counter < 10) {
        setCounter(counter + 1);
      }
    };
  
    const decrementCounter = () => {
      if (counter > -10) {
        setCounter(counter - 1);
      }
    };
  
    let labelColor;
    if (counter > 0) {
      labelColor = 'green';
    } else if (counter < 0) {
      labelColor = 'red';
    } else {
      labelColor = 'black';
    }
  
    return (
      <div>
        <label style={{ color: labelColor }}>
          Current value: {counter}
        </label>
        <button onClick={incrementCounter}>increment</button>
        <button onClick={decrementCounter}>decrement</button>
        
      </div>
    );
}

export default ImprovedCounter