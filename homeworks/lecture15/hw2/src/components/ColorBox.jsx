import React from "react";

const ColorBox = ({ name, color, onNameChange }) => {
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <div className="component-name">
        <label>Component name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorBox;
