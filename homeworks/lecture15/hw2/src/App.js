import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ColorBox from "./components/ColorBox";
import "./App.css";

const ColorRoute = ({ name, color, onNameChange }) => {
  return <ColorBox name={name} color={color} onNameChange={onNameChange} />;
};

const AppContent = () => {
  const navigate = useNavigate();
  const [components, setComponents] = useState([
    { id: "1", name: "aaron", color: "white" },
    { id: "2", name: "second", color: "white" },
    { id: "3", name: "third", color: "peachpuff" },
    { id: "4", name: "fourth", color: "white" },
    { id: "5", name: "fifth", color: "white" },
    { id: "6", name: "sixth", color: "white" },
  ]);

  const [selectedComponent, setSelectedComponent] = useState(components[0].id);
  const [selectedColor, setSelectedColor] = useState("white");

  const handleNameChange = (id, newName) => {
    const updatedComponents = components.map((comp) =>
      comp.id === id ? { ...comp, name: newName } : comp
    );
    setComponents(updatedComponents);
    navigate(`/${id}`);
  };

  const handleColorChange = () => {
    const updatedComponents = components.map((comp) =>
      comp.id === selectedComponent ? { ...comp, color: selectedColor } : comp
    );
    setComponents(updatedComponents);
  };

  return (
    <div className="App">
      <div className="controls">
        <select
          value={selectedComponent}
          onChange={(e) => {
            setSelectedComponent(e.target.value);
            navigate(`/${e.target.value}`);
          }}
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
            const newColor = e.target.value;
            setSelectedColor(newColor);
            const updatedComponents = components.map((comp) =>
              comp.id === selectedComponent
                ? { ...comp, color: newColor }
                : comp
            );
            setComponents(updatedComponents);
          }}
        >
          <option value="white">white</option>
          <option value="peachpuff">peachpuff</option>
          <option value="lightblue">lightblue</option>
          <option value="lightgreen">lightgreen</option>
          <option value="lightpink">lightpink</option>
        </select>
      </div>

      <Routes>
        {components.map((comp) => (
          <Route
            key={comp.id}
            path={`/${comp.id}`}
            element={
              <ColorRoute
                name={comp.name}
                color={comp.color}
                onNameChange={(newName) => handleNameChange(comp.id, newName)}
              />
            }
          />
        ))}
        <Route
          path="/"
          element={
            <ColorRoute
              name={components[0].name}
              color={components[0].color}
              onNameChange={(newName) =>
                handleNameChange(components[0].id, newName)
              }
            />
          }
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
