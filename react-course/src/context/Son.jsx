import {  useGifts } from './gifts-provider';
import Grandson from './Grandson';

const Son = () => {
    const { addGift } = useGifts();
  
    const handleAddGift = () => {
      const newGift = `Gift ${Math.floor(Math.random() * 100)}`;
      addGift(newGift);
    };
  
    return (
      <div>
        <h3>Son</h3>
        <button onClick={handleAddGift}>Add Gift</button>
        <Grandson />
      </div>
    );
  };

  export default Son