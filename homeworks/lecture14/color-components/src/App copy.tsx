import React, { useState } from "react";
import ColorBox from "./components/ColorBox";
import "./styles.css";

interface ColorComponent {
  id: string;
  name: string;
  color: string;
}

function App() {
  const [components, setComponents] = useState<ColorComponent[]>([
    { id: "1", name: "aaron", color: "white" },
    { id: "2", name: "second", color: "white" },
    { id: "3", name: "third", color: "peachpuff" },
    { id: "4", name: "fourth", color: "white" },
    { id: "5", name: "fifth", color: "white" },
    { id: "6", name: "sixth", color: "white" },
  ]);

  const [selectedComponent, setSelectedComponent] = useState<string>(
    components[0].id
  );
  const [selectedColor, setSelectedColor] = useState<string>("white");

  const handleNameChange = (id: string, newName: string) => {
    const updatedComponents = components.map((comp) =>
      comp.id === id ? { ...comp, name: newName } : comp
    );
    setComponents(updatedComponents);
  };

  const handleColorChange = () => {
    const updatedComponents = components.map((comp) =>
      comp.id === selectedComponent ? { ...comp, color: selectedColor } : comp
    );
    setComponents(updatedComponents);
  };

  return (
    <div className="app">
      <div className="controls">
        <select
          value={selectedComponent}
          onChange={(e) => setSelectedComponent(e.target.value)}
        >
          {components.map((comp) => (
            <option key={comp.id} value={comp.id}>
              {comp.name}
            </option>
          ))}
        </select>

        <select
          value={selectedColor}
          onChange={(e) => {
            setSelectedColor(e.target.value);
            handleColorChange();
          }}
        >
          <option value="white">white</option>
          <option value="peachpuff">peachpuff</option>
          <option value="lightblue">lightblue</option>
          <option value="lightgreen">lightgreen</option>
          <option value="lightpink">lightpink</option>
        </select>
      </div>

      <div className="color-grid">
        {components.map((comp) => (
          <ColorBox
            key={comp.id}
            name={comp.name}
            color={comp.color}
            onNameChange={(newName) => handleNameChange(comp.id, newName)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
