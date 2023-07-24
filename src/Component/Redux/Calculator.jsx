import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./calculatorReducer";

const Calculator = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(increment(1))}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement(1))}
      >
        Decrement
      </button>
    </div>
  );
};

export default Calculator;
