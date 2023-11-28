import React,{useState, useEffect} from 'react'
import data from './data'
import Name from './Name';
import Card from './Card';


const Massage = () => {
    const [allNames, setAllNames] = useState([]);
    const [before1990, setBefore1990] = useState([]);

    useEffect(() => {
        const getAllNames = () => {
          const names = data.map((person) => person.name);
          setAllNames(names);
        };
    
        const getBornBefore1990 = () => {
          const bornBefore1990 = data.filter((person) => {
            let birthYear = person.birthday.slice(-4);
            return parseInt(birthYear) < 1990;
          });
          const namesBefore1990 = bornBefore1990.map((person) => person.name);
          setBefore1990(namesBefore1990);
        };
    
        getAllNames();
        getBornBefore1990();
      }, []);

  return (
    <div>
        {/* <Name names={allNames} />
        <Name names={before1990} /> */}
        {before1990.map((person, index) => (
        <Card key={index} person={person} />
      ))}
    </div>
  )
}

export default Massage