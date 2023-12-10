import React, { createContext, useContext, useState } from 'react';

const GiftsContext = createContext();

export const useGifts = () => {
  return useContext(GiftsContext);
};

export const GiftsProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);

  const addGift = (gift) => {
    setGifts([...gifts, gift]);
  };

  return (
    <GiftsContext.Provider value={{ gifts, addGift }}>
      {children}
    </GiftsContext.Provider>
  );
};