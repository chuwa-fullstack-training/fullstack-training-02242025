import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  let output = "";

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    convert(value);
  };

  const convert = (inputValue) => {
    if (!inputValue) {
      setOutputValue("");
      return;
    }
    if (isNaN(Number(inputValue))) {
      setOutputValue(inputValue);
      return;
    }

    if (inputValue === "1") {
      output = "1st";
    } else if (inputValue === "2") {
      output = "2nd";
    } else if (inputValue === "3") {
      output = "3rd";
    } else {
      output = inputValue + "th";
    }
    setOutputValue(output);
  };

  return (
    <div className="App">
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <input type="text" value={outputValue} />
      </div>
    </div>
  );
};

export default App;
