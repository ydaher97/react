import React, { useEffect, useState } from 'react'
import './useeffect.css'

const ChangingBox = () => {
    const [color, setColor] = useState('#ff0000'); 
    const [colorChanges, setColorChanges] = useState(0);
    const [isCircle, setIsCircle] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
       
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
        setColorChanges(prevCount => prevCount + 1);
      }, 500); 
  
      return () => clearInterval(interval); 
    }, []);
  
    useEffect(() => {
      if (colorChanges >= 5) {
        setIsCircle(true);
      }
    }, [colorChanges]);
  
    return (
      <div
        style={{
          width: isCircle ? '200px' : '200px',
          height: isCircle ? '200px' : '200px',
          borderRadius: isCircle ? '50%' : '5px',
          backgroundColor: color,
         
        }}
      >
        {isCircle ? (
          <p>Circle!</p>
        ) : (
          <p>Box</p>
        )}
      </div>
    );
}

export default ChangingBox