import React from 'react';
import { GiftsProvider, useGifts } from './gifts-provider';
import Father  from './Father';
const Grandfather = () => {
  return (
    <div>
      <h1>Grandfather</h1>
      <Father />
    </div>
  );
};

export default Grandfather