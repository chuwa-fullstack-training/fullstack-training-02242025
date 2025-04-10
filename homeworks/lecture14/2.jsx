import React, { useState } from "react";

// ColorBox Component
function ColorBox({ box, isSelected, selectedColor, onNameChange }) {
  const styles = {
    box: {
      width: "120px",
      height: "120px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #ccc",
      margin: "1rem",
      backgroundColor: isSelected ? selectedColor : "#f0f0f0",
    },
    input: {
      marginBottom: "0.5rem",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.box}>
      <input
        type="text"
        value={box.name}
        onChange={(e) => onNameChange(box.id, e.target.value)}
        style={styles.input}
      />
      <p>{box.name}</p>
    </div>
  );
}

// Main App Component
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
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, name: newName } : box
      )
    );
  };

  const styles = {
    app: {
      padding: "1rem",
      fontFamily: "Arial, sans-serif",
    },
    controls: {
      marginBottom: "1rem",
    },
    label: {
      marginRight: "1rem",
    },
    boxContainer: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.app}>
      <h2>Two Controlled Components Demo</h2>

      <div style={styles.controls}>
        <label style={styles.label}>
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
      </div>

      <div style={styles.boxContainer}>
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