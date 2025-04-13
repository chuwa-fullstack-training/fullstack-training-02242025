import React, {useState} from 'react';
import './App.css';
import Component from './Component';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const initialName = ['first', 'second', 'third', 'forth', 'fifth', 'sixth'];
const colorOptions =['red', 'navy', 'chocolate', 'yellow', 'purple'];

  
function App() {
  const [name, setName] = useState(initialName);
  const [color, setColor] = useState({});
  const [selectedIndex, setSelectedIndex]=useState('');

  const handleComponentChange = (e)=>{
    setSelectedIndex(e.target.value);
  }

  const handleColorChange =(e)=>{
    if(selectedIndex==='') return;
    setColor((prev)=>({...prev, [selectedIndex]:e.target.value}));
  }
  const handleNameChange=(index, newName)=>{
    const updateNames=[...name];
    updateNames[index] =newName;
    setName(updateNames);
  }
  return (
    <BrowserRouter>
    <div className="App">
      <div className='control-panel'>
        <select value={selectedIndex} onChange={handleComponentChange}>
          <option value="" disabled>Select Component</option>
          {name.map((n, index)=>(
            <option key={index} value={index}>
              {n}
            </option>
          ))}
        </select>
        <select onChange={handleColorChange} disabled={selectedIndex===''}>
          <option value=''>
            Select Color
          </option>
          {colorOptions.map((color)=>(
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <Routes>
      <Route path='/'
      element={
        <div className="component-grid">
        {name.map((n, index) => (
          <Component index={index} n={n} color={color} handleNameChange={handleNameChange}/>
        ))}
      </div>
      }/>
      {name.map((_, index)=>(
        <Route path={`/components/${index}`}
        element={
          <Component index={index} n={_} color={color} handleNameChange={handleNameChange}/>
        }/>
      ))}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
