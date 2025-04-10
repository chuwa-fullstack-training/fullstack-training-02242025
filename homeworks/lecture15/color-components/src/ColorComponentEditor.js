import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ColorSetter = ({ color, onColorChange }) => (
  <input type="color" value={color} onChange={(e) => onColorChange(e.target.value)} />
);

const NameEditor = ({ name, onNameChange }) => (
  <input type="text" value={name} onChange={(e) => onNameChange(e.target.value)} />
);

const ColorComponentEditor = ({ components, setComponents }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = parseInt(id, 10);

  if (isNaN(index) || index < 0 || index >= components.length) {
    return <p>Component not found.</p>;
  }

  const component = components[index];

  const updateComponent = (key, value) => {
    const newComponents = [...components];
    newComponents[index][key] = value;
    setComponents(newComponents);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit {component.name}</h2>
      <div>
        Name:{" "}
        <NameEditor
          name={component.name}
          onNameChange={(val) => updateComponent("name", val)}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        Color:{" "}
        <ColorSetter
          color={component.color}
          onColorChange={(val) => updateComponent("color", val)}
        />
      </div>
      <button style={{ marginTop: "20px" }} onClick={() => navigate("/")}>
        Back to list
      </button>
    </div>
  );
};

export default ColorComponentEditor;
