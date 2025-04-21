import React, { useState } from "react";

const initialComponents = [
  { id: 0, name: "Box A", color: "lightgray" },
  { id: 1, name: "Box B", color: "lightgray" },
  { id: 2, name: "Box C", color: "lightgray" },
];

const colorOptions = [
  "lightcoral",
  "lightsalmon",
  "lightblue",
  "lightgreen",
  "orange",
  "violet",
];

function ColorBox({ id, name, color, isSelected, onRename }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "120px",
        height: "120px",
        border: isSelected ? "3px solid black" : "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        boxSizing: "border-box",
        fontFamily: "Arial",
      }}
    >
      <label>Component name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => onRename(id, e.target.value)}
        style={{ width: "100%", marginTop: "6px" }}
      />
    </div>
  );
}

export default function ColorComponentsDropdown() {
  const [components, setComponents] = useState(initialComponents);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedColor, setSelectedColor] = useState("lightcoral");

  const handleRename = (id, newName) => {
    const updated = components.map((comp) =>
      comp.id === id ? { ...comp, name: newName } : comp
    );
    setComponents(updated);
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
    setComponents((prev) =>
      prev.map((comp) =>
        comp.id === selectedId ? { ...comp, color: newColor } : comp
      )
    );
  };

  const handleSelectChange = (e) => {
    setSelectedId(Number(e.target.value));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>🎨 Select a Component and Color</h3>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div>
          <label>Select Component:</label>
          <select onChange={handleSelectChange} value={selectedId}>
            {components.map((comp) => (
              <option key={comp.id} value={comp.id}>
                {comp.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Select Color:</label>
          <select onChange={handleColorChange} value={selectedColor}>
            {colorOptions.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {components.map((comp) => (
          <ColorBox
            key={comp.id}
            id={comp.id}
            name={comp.name}
            color={comp.color}
            isSelected={comp.id === selectedId}
            onRename={handleRename}
          />
        ))}
      </div>
    </div>
  );
}
