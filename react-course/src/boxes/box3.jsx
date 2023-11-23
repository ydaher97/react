import React from 'react'
import Box4 from './box4';

const Box3 = () => {
    const boxStyle = {
        backgroundColor: 'pink',
        
        width: '90%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
      };
  return (
    <div style={boxStyle}>
        <Box4/>
        <Box4/>
    </div>
  )
}

export default Box3