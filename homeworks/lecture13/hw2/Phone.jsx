import React, { useState } from "react";
import "./phone.css";

export default function Phone() {
  const [clicked, setClicked] = useState(null);
  const buttons = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="phone">
      <div className="board">
        {clicked ? (
          <div className="click-result">You clicked: {clicked}</div>
        ) : (
          <div className="status-bar">status bar</div>
        )}
        <div className="grid">
          {buttons.map((num) => (
            <button key={num} className="btn" onClick={() => setClicked(num)}>
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
