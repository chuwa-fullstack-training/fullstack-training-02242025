import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const ComponentInput = ({ id, value, onChange, backGround }) => (
  <div
    style={{
      backgroundColor: backGround ? backGround : "transparent",
      padding: "10px",
      margin: "5px",
      border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    }}
  >
    <label htmlFor={id}>Component Name</label>
    <input id={id} name={id} value={value} onChange={onChange} />
  </div>
);

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("component1");
  const [components, setComponents] = useState({
    component1: { name: "first", color: "" },
    component2: { name: "second", color: "" },
    component3: { name: "third", color: "" },
    component4: { name: "fourth", color: "" },
    component5: { name: "fifth", color: "" },
    component6: { name: "sixth", color: "" },
  });
  const [color, setCurColor] = useState("");

  const handleChange = (key, value) => {
    setComponents((prev) => ({
      ...prev,
      [key]: { ...prev[key], name: value },
    }));
  };

  //   const handleColorChange = (newColor) => {
  //     console.log(selectedComponent);
  //     setComponents((prev) => ({
  //       ...prev,
  //       [selectedComponent]: { ...prev[selectedComponent], color: newColor },
  //     }));
  //   };

  useEffect(() => {
    if (color) {
      setComponents((prev) => ({
        ...prev,
        [selectedComponent]: { ...prev[selectedComponent], color },
      }));
    }
    setCurColor("");
  }, [color]);
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    setSelectedComponent(selected);
    navigate(`/${selected}`);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <select
          onChange={(e) => handleSelectChange(e)}
          value={selectedComponent}
          style={{ backgroundColor: "grey", color: "white" }}
        >
          {Object.entries(components).map(([key, value]) => (
            <option key={key} value={key}>
              {value.name}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setCurColor(e.target.value)}
          value={color}
          style={{ backgroundColor: "grey", color: "white" }}
        >
          <option value="">Choose Color</option>
          {[
            "Red",
            "Blue",
            "Green",
            "Yellow",
            "Orange",
            "Purple",
            "Pink",
            "Black",
            "White",
          ].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <Routes>
        {Object.entries(components).map(([key, value]) => (
          <Route
            key={key}
            path={`/${key}`}
            element={
              <ComponentInput
                id={key}
                value={value.name}
                onChange={(e) => handleChange(key, e.target.value)}
                backGround={value.color}
              />
            }
          />
        ))}
      </Routes>
    </>
  );
};

export default App;
