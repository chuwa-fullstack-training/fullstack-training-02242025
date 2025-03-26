import React, { useState } from 'react';
import './Counter.css'; // Import styles for the component

function Counter() {
  // State to store the count
  const [count, setCount] = useState(0);

  // Function to increment the count by a given value
  const increment = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  // Function to reset the count to zero
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="count-display">
        <span>{count}</span>
      </div>
      <div className="button-container">
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(10)}>+10</button>
        <button onClick={() => increment(100)}>+100</button>
        <button onClick={() => increment(1000)}>+1000</button>
      </div>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
