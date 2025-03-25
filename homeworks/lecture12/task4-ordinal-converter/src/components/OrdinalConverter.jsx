import React, { useState } from "react";
import "./OrdinalConverter.css"; // Import styles

const OrdinalConverter = () => {
  const [input, setInput] = useState(""); // State for user input

  // Function to get ordinal suffix
  const getOrdinalSuffix = (num) => {
    if (isNaN(num)) return num; // If input is not a number, return as is
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return `${num}th`;
    if (lastDigit === 1) return `${num}st`;
    if (lastDigit === 2) return `${num}nd`;
    if (lastDigit === 3) return `${num}rd`;
    return `${num}th`;
  };

  return (
    <div className="ordinal-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <span>{getOrdinalSuffix(input)}</span>
    </div>
  );
};

export default OrdinalConverter;
