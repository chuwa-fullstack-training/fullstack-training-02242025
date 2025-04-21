import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import ColorBox from "./ColorBox";

const initialComponents = [
  { id: 0, name: "Box A", color: "lightgray" },
  { id: 1, name: "Box B", color: "lightgray" },
  { id: 2, name: "Box C", color: "lightgray" },
];

const colorOptions = [
  "lightcoral", "lightsalmon", "lightblue", "lightgreen", "orange", "violet",
];

export default function ComponentList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [components, setComponents] = useState(initialComponents);
  const selectedId = Number(id);
  const selectedComponent = components.find(c => c.id === selectedId) || components[0];
  const selectedColor = selectedComponent.color;

  const handleRename = (id, newName) => {
    setComponents(prev =>
      prev.map(c => (c.id === id ? { ...c, name: newName } : c))
    );
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setComponents(prev =>
      prev.map(c => (c.id === selectedId ? { ...c, color: newColor } : c))
    );
  };

  const handleSelectChange = (e) => {
    navigate(`/components/${e.target.value}`);
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
