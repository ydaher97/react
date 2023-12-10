import React from 'react'

const AvatarList = ({ avatars, searchTerm }) => {
    const filteredAvatars = avatars.filter(avatar =>
      avatar.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        {filteredAvatars.map((avatar, index) => (
          <div key={index}>
            <p>Name: {avatar.name}</p>
            <img src={avatar.picture} alt={`Avatar ${index}`} />
          </div>
        ))}
      </div>
    );
  };
  

export default AvatarList