import React from 'react'

const Child = ({ color, onColorClick }) => {
    const handleClick = () => {
        onColorClick(color);
      };
  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {color}
    </button>
  )
}

export default Child