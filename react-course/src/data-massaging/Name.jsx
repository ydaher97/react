import React from 'react'

const Name = ({ names }) => {
    return (
      <div>
        {names.map((name, index) => (
          <h3 key={index}>{name}</h3>
        ))}
      </div>
    );
  };

export default Name