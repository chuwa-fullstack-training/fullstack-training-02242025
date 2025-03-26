import React, { useState } from 'react';

function OrdinalConverter() {
  // State to store the number input by the user
  const [number, setNumber] = useState('');

  // Function to convert the number to its corresponding ordinal string
  const getOrdinalSuffix = (num) => {
    if (num === 0) return ''; // Edge case for 0

    const j = num % 10,
          k = num % 100;

    if (j === 1 && k !== 11) {
      return num + 'st';
    }
    if (j === 2 && k !== 12) {
      return num + 'nd';
    }
    if (j === 3 && k !== 13) {
      return num + 'rd';
    }
    return num + 'th';
  };

  // Event handler for input change
  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="ordinal-converter">
      <h2>Ordinal Converter</h2>
      <div className="input-container">
        <input
          type="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter a positive integer"
          min="1"
        />
      </div>
      <div className="result-container">
        <input
          type="text"
          value={getOrdinalSuffix(Number(number))}
          readOnly
          placeholder="Result"
        />
      </div>
    </div>
  );
}

export default OrdinalConverter;
