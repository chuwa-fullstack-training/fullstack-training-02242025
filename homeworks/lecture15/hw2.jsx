import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function ColorBox({ box, selectedColor, onNameChange }) {
  const boxStyle = {
    width: "120px",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #ccc",
    margin: "1rem",
    backgroundColor: selectedColor,
  };

  return (
    <div style={boxStyle}>
      <input
        type="text"
        value={box.name}
        onChange={(e) => onNameChange(box.id, e.target.value)}
        style={{ marginBottom: "0.5rem", textAlign: "center" }}
      />
      <p>{box.name}</p>
    </div>
  );
}

function BoxPage({ boxes, selectedColor, onNameChange }) {
  const { id } = useParams();
  const boxId = parseInt(id, 10);
  const box = boxes.find((b) => b.id === boxId);

  if (!box) {
    return <p>Box not found.</p>;
  }

  return (
    <div>
      <ColorBox
        box={box}
        selectedColor={selectedColor}
        onNameChange={onNameChange}
      />
    </div>
  );
}

function App() {
  const [boxes, setBoxes] = useState([
    { id: 1, name: "first" },
    { id: 2, name: "second" },
    { id: 3, name: "third" },
    { id: 4, name: "fourth" },
    { id: 5, name: "fifth" },
    { id: 6, name: "sixth" },
  ]);

  const [selectedColor, setSelectedColor] = useState("#ffcc00");

  const handleNameChange = (id, newName) => {
    setBoxes((prev) =>
      prev.map((box) => (box.id === id ? { ...box, name: newName } : box))
    );
  };

  const navStyle = {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  };

  return (
    <Router>
      <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
        <h2>React Router: Color Components</h2>

        <div style={navStyle}>
          {boxes.map((box) => (
            <Link key={box.id} to={`/box/${box.id}`}>
              {box.name}
            </Link>
          ))}
        </div>

        <label>
          <strong>Choose color: </strong>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="#ffcc00">Yellow</option>
            <option value="#ff6666">Red</option>
            <option value="#66ccff">Blue</option>
            <option value="#99cc99">Green</option>
            <option value="#f5a623">Orange</option>
          </select>
        </label>

        <Routes>
          <Route
            path="/box/:id"
            element={
              <BoxPage
                boxes={boxes}
                selectedColor={selectedColor}
                onNameChange={handleNameChange}
              />
            }
          />
          <Route path="/" element={<p>Please select a box from above.</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
