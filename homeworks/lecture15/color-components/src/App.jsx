import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home";
import SingleComponent from "./SingleComponent";

function App() {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const [savedColor, setSavedColor] = useState({});

  const colorOptions = [
    "Coral pink",
    "Misty rose",
    "Celadon",
    "Tea green",
  ];

  const colorMap = {
    "Coral pink": "#f88379",
    "Misty rose": "#ffe4e1",
    "Celadon": "#ace1af",
    "Tea green": "#d0f0c0",
  };

  const handleChange = (index, value) => {
    const temp = [...inputs];
    temp[index] = value;
    setInputs(temp);
  };

  const handleColorSelect = (index, color) => {
    const updatedColor = { ...savedColor };
    updatedColor[index] = color;
    setSavedColor(updatedColor);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home inputs={inputs} savedColor={savedColor} colorMap={colorMap} />} />
        {inputs.map((_, index) => (
          <Route 
            key={index}
            path={`/component/${index}`} 
            element={
              <SingleComponent
                index={index}
                input={inputs[index]}
                savedColor={savedColor[index] || ""}
                colorOptions={colorOptions}
                colorMap={colorMap}
                onTextChange={(value) => handleChange(index, value)}
                onColorChange={(color) => handleColorSelect(index, color)}
              />
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;