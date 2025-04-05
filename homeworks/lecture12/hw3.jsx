import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  // Reset
  const resetCount = () => {
    setCount(0);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  };

  const counterStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
  };

  const buttonsContainerStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "1rem",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const resetButtonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={counterStyle}>Count: {count}</div>
      <div style={buttonsContainerStyle}>
        <button style={buttonStyle} onClick={() => handleIncrement(1)}>
          +1
        </button>
        <button style={buttonStyle} onClick={() => handleIncrement(10)}>
          +10
        </button>
        <button style={buttonStyle} onClick={() => handleIncrement(100)}>
          +100
        </button>
        <button style={buttonStyle} onClick={() => handleIncrement(1000)}>
          +1000
        </button>
      </div>
      <button style={resetButtonStyle} onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
