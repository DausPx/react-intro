import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../actions";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <input value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <button onClick={()=>{dispatch(incrementByAmount(parseInt(number)))}}>Click me</button>
    </div>
  );
};
export default Counter;
