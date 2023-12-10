import React, { useState } from 'react'
import Menu from './Menu'
import HomePage from './HomePage'
import  {MoodProvider}  from './MoodChangeContect'
import AboutPage from './AboutPage'

const Main = () => {
    const [currentPage,setCurrentPage] = useState('Home')

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };

  return (
    <MoodProvider>
    <div>
        <Menu handlePageChange={handlePageChange}/>
        {currentPage === 'Home' &&  <HomePage/>}
      {currentPage === 'About' && <AboutPage />}
       
    </div>
    </MoodProvider>
  )
}

export default Main