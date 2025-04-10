import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  const resetCount = () => setCount(0);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5",
    },
    counterText: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    buttonsRow: {
      display: "flex",
      gap: "10px",
      marginBottom: "1rem",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
    },
    resetButton: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#e74c3c",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.counterText}>Count: {count}</div>
      <div style={styles.buttonsRow}>
        {[1, 10, 100, 1000].map((value) => (
          <button
            key={value}
            style={styles.button}
            onClick={() => handleIncrement(value)}
          >
            +{value}
          </button>
        ))}
      </div>
      <button style={styles.resetButton} onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default Counter;