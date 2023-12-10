import React, { useEffect, useRef, useState } from 'react'
import AvatarList from './AvatarList';

const Avatar = () => {
    const [avatars ,setAvatars] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() =>{
        const fetchAvatars = async() => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=10')
                const data = await response.json()
                 const newAvatars = data.results.map(result => ({
                    name: `${result.name.first} ${result.name.last}`,
                    picture: result.picture.large
                  }));  
                  console.log(newAvatars)

                  setAvatars(newAvatars);
                     
            } catch (error) {
                console.log(error)
            }
        }
        fetchAvatars()
    },[])

    
    //  function handleOnChange(e) {
    //         const searchTerm = e.target.value.toLowerCase();
        
    //         const filteredAvatars = avatars.filter(avatar =>
    //           avatar.name.toLowerCase().includes(searchTerm)
    //         );
        
    //         setAvatars(...filteredAvatars); 
    //       }
    


    function handleOnChange(e) {
      setSearchTerm(e.target.value);
    }
  
  return (
    <div>
        <div>
            <input 
              type="text" 
              name='search'  
              onChange={handleOnChange}
              placeholder="Search by name" />
        </div>
        <AvatarList avatars={avatars} searchTerm={searchTerm} />
    </div>
  )
}

export default Avatar