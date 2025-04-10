import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

const ColorComponent = ({ name, color, onNameChange }) => {
  return (
    <div 
      className="color-component" 
      style={{ backgroundColor: color }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Component name"
        className="color-component-input"
      />
      <p className="color-component-text">{name || 'Unnamed'}</p>
    </div>
  );
};

const ColorComponentPage = ({ components, handleNameChange, handleColorChange, colorOptions }) => {
  const { id } = useParams();
  const component = components.find(c => c.id === Number(id));

  if (!component) return <div className="component-not-found">Component not found</div>;

  return (
    <div className="controller-container">
      <Link to="/" className="back-link">Back to All Components</Link>
      
      <h2>{component.name}</h2>
      
      <div className="controls">
        <label className="color-selector">
          Change Color: 
          <select
            value={component.color}
            onChange={(e) => handleColorChange(component.id, e.target.value)}
            className="color-select"
          >
            {colorOptions.map((color) => (
              <option key={color.value} value={color.value}>
                {color.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      
      <ColorComponent
        name={component.name}
        color={component.color}
        onNameChange={(newName) => handleNameChange(component.id, newName)}
      />
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
  
  const initialComponents = colorOptions.slice(0, 6).map((color, index) => ({
    id: index + 1,
    name: `Component ${index + 1}`,
    color: color.value
  }));

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="controller-container">
            <h2>Component Controller</h2>
            
            <h3>All Components:</h3>
            <div className="components-grid">
              {components.map(c => (
                <Link to={`/component/${c.id}`} key={c.id} className="component-link">
                  <ColorComponent
                    name={c.name}
                    color={c.color}
                    onNameChange={(newName) => handleNameChange(c.id, newName)}
                  />
                </Link>
              ))}
            </div>
          </div>
        } />
        
        <Route 
          path="/component/:id" 
          element={
            <ColorComponentPage 
              components={components}
              handleNameChange={handleNameChange}
              handleColorChange={handleColorChange}
              colorOptions={colorOptions}
            />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;