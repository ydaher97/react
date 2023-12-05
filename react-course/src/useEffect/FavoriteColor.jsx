import React, { useEffect, useState } from 'react'

const FavoriteColor = () => {
    const [favoriteColor, setFavoriteColor] = useState('blue');

    useEffect(() => {
      const changeColor = () => {
        setTimeout(() => {
          setFavoriteColor('red'); 
        }, 1000);
      };
  
      changeColor(); 
    }, []);
  
    return (
      <div>
        <h1>My favorite color is {favoriteColor}</h1>
        <div id="emptyDiv"></div>
      </div>
    );
}

export default FavoriteColor