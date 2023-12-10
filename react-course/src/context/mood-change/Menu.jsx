import React from 'react'
import './mood.css'
import  { useMood }from './MoodChangeContect'

const Menu = ({ handlePageChange }) => {
    const { mood, changeMood} =  useMood();


    const changePage = (page) => {
        handlePageChange(page);
      };
  return (
    <nav>
    <div className={`top-menu ${mood ? 'night-mode' : 'day-mode'}`}> 
     <button onClick={changeMood}>Toggle Mode</button>
      <button onClick={() => changePage('Home')}>Home</button>
      <button onClick={() => changePage('About')}>About</button>
    </div>
    </nav>
  )
}

export default Menu