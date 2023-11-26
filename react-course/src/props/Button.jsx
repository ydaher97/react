import React from 'react';

const Button = ({ children, isImportant, text }) => {
  const buttonStyle = {
    fontWeight: isImportant ? 'bold' : 'normal',
  };

  return (
    <button style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
