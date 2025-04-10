import React, { useState } from 'react';
import './App.css';

const ColorComponent = ({ name, color, onNameChange }) => {
  return (
    <div className="color-component" style={{ backgroundColor: color }}>
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Component name"
      />
      <p>{name || 'Unnamed'}</p>
    </div>
  );
};

const App = () => {
  const colorOptions = [
    { value: '#f8c8dc', label: 'Soft Pink' },
    { value: '#b5ead7', label: 'Mint Green' },
    { value: '#c7ceea', label: 'Lavender Blue' },
    { value: '#ffdac1', label: 'Peach' },
    { value: '#e2f0cb', label: 'Pale Green' },
    { value: '#b2b2b2', label: 'Light Gray' },
    { value: '#a2d2ff', label: 'Baby Blue' },
    { value: '#cdb4db', label: 'Lilac' },
    { value: '#ffc8dd', label: 'Blush Pink' }
  ];
  const initialComponents = [
    { id: 1, name: 'Component 1', color: '#f8c8dc' },
    { id: 2, name: 'Component 2', color: '#b5ead7' },
    { id: 3, name: 'Component 3', color: '#c7ceea' },
    { id: 4, name: 'Component 4', color: '#ffdac1' },
    { id: 5, name: 'Component 5', color: '#e2f0cb' },
    { id: 6, name: 'Component 6', color: '#b2b2b2' }
  ];


  const [selectedComponentId, setSelectedComponentId] = useState(1);
  const [components, setComponents] = useState(initialComponents);

  const handleNameChange = (id, newName) => {
    setComponents(components.map(c => 
      c.id === id ? { ...c, name: newName } : c
    ));
  };

  const handleColorChange = (id, newColor) => {
    setComponents(components.map(c => 
      c.id === id ? { ...c, color: newColor } : c
    ));
  };
  const selected = components.find(c => c.id === selectedComponentId);


  return (
    <div className="controller-container">
      <h2>Component Controller</h2>
      
      <div className="controls">
        <label>
          Select Component: 
          <select 
            value={selectedComponentId}
            onChange={(e) => setSelectedComponentId(Number(e.target.value))}
          >
            {components.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </label>
      </div>
      
      <div className="controls">
      <label>
          Change Color: 
          <select
            value={selected?.color || ''}
            onChange={(e) => handleColorChange(selectedComponentId, e.target.value)}
          >
            {colorOptions.map((color) => (
              <option key={color.value} value={color.value}>
                {color.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    
      
      <h3>All Components:</h3>
      <div className="components-grid">
        {components.map(c => (
          <ColorComponent
            key={c.id}
            name={c.name}
            color={c.color}
            onNameChange={(newName) => handleNameChange(c.id, newName)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;