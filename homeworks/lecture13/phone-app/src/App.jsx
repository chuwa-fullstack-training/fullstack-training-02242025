import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const handleNumberClick = (number) => {
    setInput(prev => prev + number);
    setActiveButton(number);
    setTimeout(() => setActiveButton(null), 150);
  };

  const handleClear = () => {
    setInput('');
  };

  // Generate numbers 1-20 in a 4x5 grid
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="iphone-frame">
      <div className="iphone-screen">

      <div className="blue-wrapper">

        {/* Display Area */}
        <div className="phone-display">
          {input || <span className="placeholder">Status Bar</span>}
        </div>

        {/* Number Pad */}
        <div className="phone-number-pad">
          {numbers.map(num => (
            <button
              key={num}
              className={`phone-button ${activeButton === num ? 'active' : ''}`}
              onClick={() => handleNumberClick(num)}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Control Buttons */}
        <div className="phone-controls">
          <button className="phone-clear-button" onClick={handleClear}>
            Clear
          </button>
        </div>
</div>
      </div>
    </div>
  );
}

export default App;