import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ComponentEditor = ({ components, setComponents }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = parseInt(id, 10);

  if (isNaN(index) || index < 0 || index >= components.length) {
    return <p>Component not found.</p>;
  }

  const comp = components[index];

  const updateComponent = (key, value) => {
    const updated = [...components];
    updated[index][key] = value;
    setComponents(updated);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Edit Component {index}</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Name:
          <input
            type="text"
            value={comp.name}
            onChange={(e) => updateComponent("name", e.target.value)}
            style={{ width: "100%", marginTop: 4 }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Color:
          <input
            type="color"
            value={comp.color}
            onChange={(e) => updateComponent("color", e.target.value)}
            style={{ width: "100%", marginTop: 4 }}
          />
        </label>
      </div>

      <div
        style={{
          backgroundColor: comp.color,
          height: "100px",
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
        }}
      >
        Preview: {comp.name}
      </div>

      <button onClick={() => navigate("/components")} style={{ marginTop: "20px" }}>
        Back
      </button>
    </div>
  );
};

export default ComponentEditor;
