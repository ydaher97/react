import { createContext, useContext, useState } from "react";


export const MoodContext = createContext();


export const useMood = () => {
    return useContext(MoodContext);
  };


  export const MoodProvider = ({ children }) => {
    const [mood, setMood] = useState(false);
  
    const changeMood = () => {
        setMood(!mood);
    };
  
    return (
      <MoodContext.Provider value={{ mood, changeMood }}>
        {children}
      </MoodContext.Provider>
    );
  };