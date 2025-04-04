import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = (incrementValue) => {
    setCount((prev) => prev + incrementValue);
  };

  return (
    <div className="App">
      <div>
        <button className="Button1" onClick={() => handleClick(1)}>
          +1
        </button>
        <button className="Button2" onClick={() => handleClick(10)}>
          +10
        </button>
        <button className="Button3" onClick={() => handleClick(100)}>
          +100
        </button>
        <button className="Button4" onClick={() => handleClick(1000)}>
          +1000
        </button>
        <h3>{count}</h3>
      </div>
    </div>
  );
};

export default App;
