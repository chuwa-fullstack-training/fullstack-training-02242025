import React, { useState } from "react";
import "./Counter.css"; // Import styles

const Counter = () => {
  const [count, setCount] = useState(0); // State for count

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count + 10)}>+10</button>
        <button onClick={() => setCount(count + 100)}>+100</button>
        <button onClick={() => setCount(count + 1000)}>+1,000</button>
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
