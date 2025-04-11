import React, { useState } from 'react';
import './hw3.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = (value) => {
    setCount(count + value);
  };

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => handleIncrement(1)}>+1</button>
        <button onClick={() => handleIncrement(10)}>+10</button>
        <button onClick={() => handleIncrement(100)}>+100</button>
        <button onClick={() => handleIncrement(1000)}>+1000</button>
      </div>
      <div className="count-display">{count}</div>
    </div>
  );
}

export default App;
