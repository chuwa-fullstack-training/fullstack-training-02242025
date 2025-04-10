import React, { useState } from 'react';
import './App.css';

const initialComponents = [
  { id: 1, name: 'first', color: 'white' },
  { id: 2, name: 'second', color: 'white' },
  { id: 3, name: 'third', color: 'white' },
  { id: 4, name: 'fourth', color: 'white' },
  { id: 5, name: 'fifth', color: 'white' },
  { id: 6, name: 'sixth', color: 'white' },
];

const ColorComponent = ({ name, color, onChange }) => (
  <div className="color-box" style={{ backgroundColor: color }}>
    <label>Component name:</label>
    <input
      value={name}
      onChange={e => onChange(e.target.value)}
      style={{ backgroundColor: 'white' }}
    />
  </div>
);

const App = () => {
  const [components, setComponents] = useState(initialComponents);
  const [selectedId, setSelectedId] = useState(2); 
  const [selectedColor, setSelectedColor] = useState('');

  const handleNameChange = (id, newName) => {
    setComponents(prev =>
      prev.map(comp => (comp.id === id ? { ...comp, name: newName } : comp))
    );
  };

  const applyColor = (color) => {
    setComponents(prev =>
      prev.map(comp =>
        comp.id === selectedId ? { ...comp, color: color } : comp
      )
    );
  };

  return (
    <div className="container">
      <div className="toolbar">
        <select value={selectedId} onChange={e => setSelectedId(Number(e.target.value))}>
          {components.map(comp => (
            <option key={comp.id} value={comp.id}>{comp.name}</option>
          ))}
        </select>

        <select value={selectedColor} onChange={e => {
          setSelectedColor(e.target.value);
          applyColor(e.target.value);
        }}>
          <option value="">Choose color</option>
          <option value="orange">Orange</option>
          <option value="peachpuff">Peach</option>
          <option value="lightblue">Light Blue</option>
        </select>
      </div>

      <div className="grid">
        {components.map(comp => (
          <ColorComponent
            key={comp.id}
            name={comp.name}
            color={comp.color}
            onChange={newName => handleNameChange(comp.id, newName)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
