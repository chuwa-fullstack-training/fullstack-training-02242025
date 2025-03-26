import { useState } from "react";

function Hw4() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const getOrdinalSuffix = (num) => {
    if (isNaN(num)) return "";
    
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return "th";
    }

    switch (lastDigit) {
      case 1: return "st";
      case 2: return "nd"; 
      case 3: return "rd";
      default: return "th";
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    
    const number = parseInt(value);
    if (!isNaN(number)) {
      setOutput(`${value}${getOrdinalSuffix(number)}`);
    } else {
      setOutput(value);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a number or text"
          style={{ 
            padding: "8px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
        />
        <div style={{
          padding: "8px",
          fontSize: "16px",
          minWidth: "100px"
        }}>
          Output: {output}
        </div>
      </div>
    </div>
  );
}

export default Hw4;
