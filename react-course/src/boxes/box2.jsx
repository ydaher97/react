import React from 'react'
import Box3 from './box3';

const Box2 = () => {
    const boxStyle = {
        backgroundColor: 'BLUE',
        
        width: '90%',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
      };

  return (
    <div style={boxStyle}><Box3/></div>
  )
}

export default Box2