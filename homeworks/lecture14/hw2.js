import React, { useState } from 'react';
import './hw2.css';

const initialComponents = [
  { id: 0, name: 'first' },
  { id: 1, name: 'second' },
  { id: 2, name: 'third' },
  { id: 3, name: 'fourth' },
  { id: 4, name: 'fifth' },
  { id: 5, name: 'sixth' },
];

const colors = ['lightcoral', 'lightsalmon', 'lightblue', 'lightgreen', 'orange'];

function App() {
  const [components, setComponents] = useState(initialComponents);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedColor, setSelectedColor] = useState('lightcoral');

  const updateName = (id, newName) => {
    const updated = components.map(comp =>
      comp.id === id ? { ...comp, name: newName } : comp
    );
    setComponents(updated);
  };

  return (
    <div className="app">
      <div className="selectors">
        <select onChange={(e) => setSelectedId(Number(e.target.value))} value={selectedId}>
          {components.map(comp => (
            <option key={comp.id} value={comp.id}>
              {comp.name}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
          {colors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>

      <div className="grid">
        {components.map(comp => (
          <ComponentBox
            key={comp.id}
            id={comp.id}
            name={comp.name}
            selected={comp.id === selectedId}
            color={selectedColor}
            onNameChange={updateName}
          />
        ))}
      </div>
    </div>
  );
}

function ComponentBox({ id, name, selected, color, onNameChange }) {
  return (
    <div className="box" style={{ backgroundColor: selected ? color : 'white' }}>
      <label>Component name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(id, e.target.value)}
      />
    </div>
  );
}

export default App;
