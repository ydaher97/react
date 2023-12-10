import { GiftsProvider, useGifts } from './gifts-provider';

 const Grandson = () => {
    const { gifts } = useGifts();
  
    return (
      <div>
        <h4>Grandson</h4>
        <ul>
          {gifts.map((gift, index) => (
            <li key={index}>{gift}</li>
          ))}
        </ul>
      </div>
    );
  };
  

  export default Grandson