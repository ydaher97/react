import React from 'react';

const Card = ({ person }) => {
    const { name, birthday, favoriteFoods } = person;
    const meats = favoriteFoods && favoriteFoods.meats ? favoriteFoods.meats : [];
    const fish = favoriteFoods && favoriteFoods.fish ? favoriteFoods.fish : [];

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>Birthday: {birthday}</p>
      <p>Favorite Meats: {meats.join(', ')}</p>
      <p>Favorite Fish Foods: {fish.join(', ')}</p>
    </div>
  );
};

export default Card;
