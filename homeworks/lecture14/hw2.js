import React, { useState } from "react";

const ColorSquare = ({ name, color }) => (
  <div style={{
    width: 100,
    height: 100,
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    margin: "10px",
    border: "1px solid #000"
  }}>
    {name}
  </div>
);

const ComponentSelector = ({ components, selectedIndex, onChange }) => (
  <select value={selectedIndex} onChange={(e) => onChange(Number(e.target.value))}>
    {components.map((comp, i) => (
      <option key={i} value={i}>
        {comp.name}
      </option>
    ))}
  </select>
);

const ColorSetter = ({ color, onColorChange }) => (
  <input type="color" value={color} onChange={(e) => onColorChange(e.target.value)} />
);

const NameEditor = ({ name, onNameChange }) => (
  <input type="text" value={name} onChange={(e) => onNameChange(e.target.value)} />
);

export default function App() {
  const [components, setComponents] = useState([
    { name: "Component 1", color: "#f00" },
    { name: "Component 2", color: "#0f0" },
    { name: "Component 3", color: "#00f" }
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateComponent = (key, value) => {
    const newComponents = [...components];
    newComponents[selectedIndex][key] = value;
    setComponents(newComponents);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Component Selector</h3>
      <ComponentSelector
        components={components}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      />

      <h3>Edit Selected Component</h3>
      <div style={{ marginBottom: "10px" }}>
        Name: <NameEditor
          name={components[selectedIndex].name}
          onNameChange={(newName) => updateComponent("name", newName)}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        Color: <ColorSetter
          color={components[selectedIndex].color}
          onColorChange={(newColor) => updateComponent("color", newColor)}
        />
      </div>

      <h3>All Components</h3>
      <div style={{ display: "flex" }}>
        {components.map((comp, i) => (
          <ColorSquare key={i} name={comp.name} color={comp.color} />
        ))}
      </div>
    </div>
  );
}
