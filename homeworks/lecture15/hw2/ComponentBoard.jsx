import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "./Box";
import { COLORS } from "./constant";

export default function ComponentBoard() {
  const [values, setValues] = useState(new Array(6).fill(""));
  const [colors, setColors] = useState(new Array(6).fill(""));
  const [selectedBox, setSeletedBox] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const navigate = useNavigate();

  const updateValue = (value, index) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  const handleColorChange = (e) => {
    const updated = [...colors];
    updated[selectedBox] = e.target.value;
    setColors(updated);
    setSelectedColor("");

    // 👇 navigate to color route
    if (e.target.value && values[selectedBox]) {
      navigate(`/${e.target.value}`);
    }
  };

  return (
    <React.Fragment>
      <div className="select-section">
        <select onChange={(e) => setSeletedBox(Number(e.target.value))}>
          <option value="">Choose component</option>
          {values.map((value, index) => {
            return (
              value !== "" && (
                <option key={index} value={index}>
                  {value}
                </option>
              )
            );
          })}
        </select>
        <select value={selectedColor} onChange={handleColorChange}>
          <option value="">Choose color</option>
          {COLORS.map((color, index) => {
            return (
              <option key={index} value={color}>
                {color}
              </option>
            );
          })}
        </select>
      </div>
      <div className="container">
        {values.map((value, index) => (
          <Box
            index={index}
            value={value}
            key={index}
            updateValue={(value) => updateValue(value, index)}
            style={{
              backgroundColor: colors[index],
            }}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
