import React, { useState } from 'react';
import './Counter.css'; // 导入 CSS 文件

function Counter() {
  const [count, setCount] = useState(0);

  const increment = (amount) => {
    setCount(prevCount => prevCount + amount);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container"> {}
      <div className="button-group">
        <button className="button" onClick={() => increment(1)}>+1</button>
        <button className="button" onClick={() => increment(10)}>+10</button>
        <button className="button" onClick={() => increment(100)}>+100</button>
        <button className="button" onClick={() => increment(1000)}>+1000</button>
      </div>
      <div className="counter-display">{count}</div>
      <button className="reset-button" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;