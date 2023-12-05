import React, { useEffect, useState } from 'react';
// import '../useEffect/useeffect.css';
const Box = ({ size }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setShow(false); 
    }, 4000);

    return () => clearTimeout(slideTimer);
  }, []);

  return (
    <>
      {show && (
        <div className={`box ${size}`}>
          <p>Box {size}</p>
        </div>
      )}
    </>
  );
};



export default Box;
