import React, { useState } from 'react';
import './hw4.css';

function App() {
  const [input, setInput] = useState('');

  const getOrdinal = (value) => {
    const num = parseInt(value, 10);

    if (isNaN(num)) return value; // return string as-is

    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${num}th`;
    }

    switch (lastDigit) {
      case 1: return `${num}st`;
      case 2: return `${num}nd`;
      case 3: return `${num}rd`;
      default: return `${num}th`;
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number or string"
      />
      <input
        type="text"
        value={getOrdinal(input)}
        readOnly
      />
    </div>
  );
}

export default App;
