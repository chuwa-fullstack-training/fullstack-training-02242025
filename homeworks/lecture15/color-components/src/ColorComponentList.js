import React from "react";
import { Link } from "react-router-dom";

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

const ColorComponentList = ({ components }) => (
  <div style={{ padding: "20px" }}>
    <h2>All Components</h2>
    <div style={{ display: "flex" }}>
      {components.map((comp, i) => (
        <Link key={i} to={`/components/${i}`}>
          <ColorSquare name={comp.name} color={comp.color} />
        </Link>
      ))}
    </div>
  </div>
);

export default ColorComponentList;
