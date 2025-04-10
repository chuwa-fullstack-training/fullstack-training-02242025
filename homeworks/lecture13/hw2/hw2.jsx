import React from 'react';
import './PhoneGrid.css'; 

const PhoneGrid = () => {
  const handleClick = (num) => {
    alert(`You clicked ${num}`);
  };

  return (
    <div className="phone-container">
      <div className="status-bar">status bar</div>
      <div className="grid">
        {Array.from({ length: 20 }, (_, i) => (
          <button key={i} className="grid-button" onClick={() => handleClick(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhoneGrid;
