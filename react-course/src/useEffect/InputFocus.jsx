import React, { useEffect, useRef } from 'react'

const InputFocus = () => {
  const input =  useRef(null)

//   useEffect(() => {
//     if(input.current){
//         input.current.focus()
//     }
//   }, [])
  return (
    <div>
        <input type="text" ref={input} />
    </div>
  )
}

export default InputFocus