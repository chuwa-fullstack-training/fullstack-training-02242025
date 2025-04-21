import React, { useState } from 'react';
const Hw3 = () => {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '80px',
    fontFamily: 'Arial, sans-serif',
  };

  const countStyle = {
    fontSize: '40px',
    margin: '20px',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h2>🚀 React Counter</h2>
      <div style={countStyle}>{count}</div>

      <div>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>+1</button>
        <button style={buttonStyle} onClick={() => setCount(count + 10)}>+10</button>
        <button style={buttonStyle} onClick={() => setCount(count + 100)}>+100</button>
        <button style={buttonStyle} onClick={() => setCount(count + 1000)}>+1000</button>
      </div>

      <div>
        <button
          style={{ ...buttonStyle, backgroundColor: '#f44336', color: 'white' }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Hw3;
