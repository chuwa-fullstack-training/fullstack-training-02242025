import { useState } from "react";

function Hw3() {
  const [count, setCount] = useState(0);

  const handleIncrement = (amount) => {
    setCount(count + amount);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter</h2>
      
      <div style={{ fontSize: "24px" }}>
        Count: {count}
      </div>

      <div style={{ display: "flex", gap: "10px", }}>
        <button onClick={() => handleIncrement(1)}>+1</button>
        <button onClick={() => handleIncrement(10)}>+10</button>
        <button onClick={() => handleIncrement(100)}>+100</button>
        <button onClick={() => handleIncrement(1000)}>+1000</button>
      </div>

      <button 
        onClick={handleReset}
        style={{ marginTop: "20px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Hw3;
