import React, { useState } from 'react';
import './Converter.css';

function Converter() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value === '') {
      setOutputValue('');
      return;
    }

    if (!isNaN(value)) {
      setOutputValue(getOrdinalNumber(value));
    } else {
      setOutputValue(value);
    }
  };

  const handleBackspace = (e) => {
    if (e.key === 'Backspace') {
      const newValue = inputValue.slice(0, -1);
      setInputValue(newValue);
      
      if (newValue === '') {
        setOutputValue('');
        return;
      }

      if (!isNaN(newValue)) {
        setOutputValue(getOrdinalNumber(newValue));
      } else {
        setOutputValue(newValue);
      }
    }
  };

  const getOrdinalNumber = (num) => {
    const n = parseInt(num, 10);
    if (isNaN(n)) return num;
    
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${n}th`;
    }
    
    switch (lastDigit) {
      case 1: return `${n}st`;
      case 2: return `${n}nd`;
      case 3: return `${n}rd`;
      default: return `${n}th`;
    }
  };

  return (
    <div className="converter-app">
      <div className="input-box">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleBackspace}
          className="converter-input"
          autoFocus
        />
      </div>
      <div className="output-box">
        <div className="converter-output">{outputValue}</div>
      </div>
    </div>
  );
}

export default Converter;