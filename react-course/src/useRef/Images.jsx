import React, { useRef } from 'react';
import coloredImage from './img/images.jfif'; 
import blackWhiteImage from './img/Best-Black-and-white-pictures.jpg.webp'; 

const ImageToggle = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  const handleMouseOver = (imageRef) => {
    imageRef.current.src = coloredImage;
  };

  const handleMouseOut = (imageRef) => {
    imageRef.current.src = blackWhiteImage;
  };

  return (
    <div>
      <img
        ref={imageRef1}
        src={blackWhiteImage}
        alt="Black and White Image"
        onMouseOver={() => handleMouseOver(imageRef1)}
        onMouseOut={() => handleMouseOut(imageRef1)}
      />
      {/* <img
        ref={imageRef2}
        src={blackWhiteImage}
        alt="Black and White Image"
        onMouseOver={() => handleMouseOver(imageRef2)}
        onMouseOut={() => handleMouseOut(imageRef2)}
      /> */}
    </div>
  );
};

export default ImageToggle;
