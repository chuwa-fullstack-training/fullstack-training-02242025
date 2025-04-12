import React, {useState} from 'react';
import './App.css';

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
      <div className="component-grid">
        {name.map((n, index) => (
          <div
            key={index}
            className="component-box"
            style={{ backgroundColor: color[index] || '#eee' }}
          >
            <input
              type="text"
              value={n}
              onChange={(e) => handleNameChange(index, e.target.value)}
              className="name-input"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
