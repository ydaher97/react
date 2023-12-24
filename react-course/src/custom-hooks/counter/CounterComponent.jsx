import { useCounter } from "./useCounter";

const CounterComponent = ({ initialNum }) => {
    const { value, addOne, removeOne, double, divide } = useCounter(initialNum);
  
    return (
      <div>
        <p>Counter Value: {value}</p>
        <button onClick={addOne}>Add One</button>
        <button onClick={removeOne}>Remove One</button>
        <button onClick={double}>Double</button>
        <button onClick={() => divide(2)}>Divide by 2</button>
      </div>
    );
  };

  export default CounterComponent