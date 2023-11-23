import React from 'react'
import Box2 from './box2';

const Box1 = () => {
    const boxStyle = {
        backgroundColor: 'green',
        width: '90%',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      };
  return (
    <div style={boxStyle}>
    <Box2/>
    </div>
  )
}

export default Box1