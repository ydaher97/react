import React, { useState } from 'react';

export const useCounter = (initialNum) => {
  const [value, setValue] = useState(initialNum);

  const addOne = () => {
    setValue(prevValue => prevValue + 1);
  };

  const removeOne = () => {
    setValue(prevValue => prevValue - 1);
  };

  const double = () => {
    setValue(prevValue => prevValue * 2);
  };

  const divide = (divider) => {
    setValue(prevValue => prevValue / divider);
  };

  return {
    value,
    addOne,
    removeOne,
    double,
    divide,
  };
};