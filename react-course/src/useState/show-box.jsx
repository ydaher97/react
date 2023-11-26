import React, { useState } from 'react'

const ShowBox = () => {

    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Box' : 'Show Box'}
      </button>
      {isVisible && (
        <div style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'yellow',
          marginTop: '10px'
        }}>
          
        </div>
      )}
    </div>
  )
}

export default ShowBox