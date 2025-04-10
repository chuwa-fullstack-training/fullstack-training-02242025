import React, { useState } from "react";

function OrdinalInput() {
  const [value, setValue] = useState("");

  const getOrdinal = (val) => {
    const number = parseInt(val, 10);
    if (isNaN(number)) return "";

    const remainder100 = number % 100;
    const remainder10 = number % 10;

    if (remainder100 >= 11 && remainder100 <= 13) return `${number}th`;

    switch (remainder10) {
      case 1:
        return `${number}st`;
      case 2:
        return `${number}nd`;
      case 3:
        return `${number}rd`;
      default:
        return `${number}th`;
    }
  };

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    input: {
      width: "100px",
      padding: "6px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={styles.input}
        placeholder="Type a number"
      />
      <div>{getOrdinal(value)}</div>
    </div>
  );
}

export default OrdinalInput;