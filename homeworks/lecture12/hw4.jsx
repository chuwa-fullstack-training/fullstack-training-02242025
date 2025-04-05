import React, { useState } from "react";

function OrdinalInput() {
  const [value, setValue] = useState("");

  // convert
  const getOrdinal = (val) => {
    const number = parseInt(val, 10);
    if (isNaN(number)) return "";

    const remainder100 = number % 100;
    const remainder10 = number % 10;

    // Special case
    if (remainder100 >= 11 && remainder100 <= 13) {
      return number + "th";
    }

    // General rule
    switch (remainder10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
      default:
        return number + "th";
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{ width: "100px" }}
        placeholder="Type a number"
      />
      <div>{getOrdinal(value)}</div>
    </div>
  );
}

export default OrdinalInput;
