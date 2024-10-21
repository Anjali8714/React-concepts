import React, { useState } from "react";
import useCounter from "./useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h2>count-{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
