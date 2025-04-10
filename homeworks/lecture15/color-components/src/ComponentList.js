import React from "react";
import { Link } from "react-router-dom";

const ComponentList = ({ components }) => {
  return (
    <div style={{ padding: 20 }}>
      <h2>All Components</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {components.map((comp, i) => (
          <Link key={i} to={`/components/${i}`} style={{ textDecoration: "none" }}>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                width: 200,
                backgroundColor: comp.color,
              }}
            >
              <p><strong>{comp.name}</strong></p>
              <p style={{ fontSize: "0.9em", color: "#666" }}>Edit</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComponentList;
