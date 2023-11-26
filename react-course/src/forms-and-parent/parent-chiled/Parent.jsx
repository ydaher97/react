import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const colors = ["blue", "red", "yellow"];
    const [selectedColor, setSelectedColor] = useState(null);
  
    const handleColorClick = (color) => {
      setSelectedColor(color);
    };
  
    return (
      <div>
        {colors.map((color, index) => (
          <Child key={index} color={color} onColorClick={handleColorClick} />
        ))}
        {selectedColor && (
          <p>Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
        )}
      </div>
    );
}

export default Parent