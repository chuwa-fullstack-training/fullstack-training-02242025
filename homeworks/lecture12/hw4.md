![demo](./hw4.gif)

Implement the converter shown above in React.

import React, { useState } from "react";

export default function Converter() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let input = e.target.value;

    if (!isNaN(input) && input !== "") {
      const num = Number(input);
      const lastvalue = num % 10;

      if ((num > 0 && num < 4) || (num > 20 && num < 94)) {
        if (lastvalue === 1) {
          setValue(input + "st");
        } else if (lastvalue === 2) {
          setValue(input + "nd");
        } else if (lastvalue === 3) {
          setValue(input + "rd");
        } else {
          setValue(input + "th");
        }
      } else {
        setValue(input + "th");
      }
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <div style={{ display: "flex", fontFamily: "sans-serif" }}>
      <input onChange={handleChange}></input>
      <div
        style={{
          height: "20px",
          width: "140px",
          border: "1px solid black",
          padding: "4px 0 0 2px",
          fontSize: "13px",
        }}
      >
        {value}
      </div>
    </div>
  );
}
