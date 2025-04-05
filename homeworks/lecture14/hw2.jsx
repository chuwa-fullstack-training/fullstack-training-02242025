import React, { useState } from "react";

// component
function ColorBox({ box, isSelected, selectedColor, onNameChange }) {
  const boxStyle = {
    width: "120px",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #ccc",
    margin: "1rem",
    backgroundColor: isSelected ? selectedColor : "#f0f0f0",
  };

  return (
    <div style={boxStyle}>
      <input
        type="text"
        value={box.name}
        onChange={(e) => onNameChange(box.id, e.target.value)}
        style={{ marginBottom: "0.5rem", textAlign: "center" }}
      />
      <p>{box.name}</p>
    </div>
  );
}

function App() {
  const [boxes, setBoxes] = useState([
    { id: 1, name: "first" },
    { id: 2, name: "second" },
    { id: 3, name: "third" },
    { id: 4, name: "fourth" },
    { id: 5, name: "fifth" },
    { id: 6, name: "sixth" },
  ]);

  const [selectedBoxId, setSelectedBoxId] = useState(1);

  const [selectedColor, setSelectedColor] = useState("#ffcc00");

  const handleNameChange = (id, newName) => {
    setBoxes((prev) =>
      prev.map((box) => (box.id === id ? { ...box, name: newName } : box))
    );
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h2>Two Controlled Components Demo</h2>

      <label style={{ marginRight: "1rem" }}>
        <strong>Component name:</strong>{" "}
        <select
          value={selectedBoxId}
          onChange={(e) => setSelectedBoxId(Number(e.target.value))}
        >
          {boxes.map((box) => (
            <option key={box.id} value={box.id}>
              {box.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        <strong>Choose color:</strong>{" "}
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="#ffcc00">Yellow</option>
          <option value="#ff6666">Red</option>
          <option value="#66ccff">Blue</option>
          <option value="#99cc99">Green</option>
          <option value="#f5a623">Orange</option>
        </select>
      </label>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1rem" }}>
        {boxes.map((box) => (
          <ColorBox
            key={box.id}
            box={box}
            isSelected={box.id === selectedBoxId}
            selectedColor={selectedColor}
            onNameChange={handleNameChange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
