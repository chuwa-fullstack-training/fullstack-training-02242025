import React, { useState } from 'react';
import './hw2.css';

function App() {
  const [clicked, setClicked] = useState(null);

  const handleClick = (number) => {
    setClicked(number);
  };

  return (
    <div className="phone">
      <div className="status-bar">status bar</div>
      <div className="grid">
        {Array.from({ length: 20 }, (_, i) => (
          <button key={i + 1} onClick={() => handleClick(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
      {clicked && <div className="click-status">You clicked: {clicked}</div>}
    </div>
  );
}

export default App;
