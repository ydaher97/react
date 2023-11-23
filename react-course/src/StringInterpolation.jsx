import React from 'react'

const StringInterpolation = () => {
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 =6;
    const string = "I love React!"

    const formattedString = data.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


  return (
    <div>
        <h1>{formattedString}</h1>
        
        
        
        
        count: {number1 + number2}

       string length:  {string.length}
    </div>
  )
}

export default StringInterpolation