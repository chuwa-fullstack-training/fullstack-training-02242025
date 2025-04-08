import React, { useState } from "react";
import "./PhoneLayout.css";

function PhoneLayout() {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleClick = (number) => {
    setSelectedNumber(number);
    setTimeout(() => setSelectedNumber(null), 300); // Reset after animation
  };

  return (
    <div className="phone-container">
      <div className="phone-frame">
        <div className="status-bar">status bar</div>
        <div className="number-grid">
          {numbers.map((number) => (
            <button
              key={number}
              className={`number-button ${
                selectedNumber === number ? "active" : ""
              }`}
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhoneLayout;
