import React from "react";

function PhoneScreen() {
  const styles = {
    phoneContainer: {
      width: "300px",
      height: "600px",
      margin: "2rem auto",
      border: "2px solid #333",
      borderRadius: "40px",
      overflow: "hidden",
      backgroundColor: "#fff",
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
    statusBar: {
      height: "50px",
      backgroundColor: "#888",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: "bold",
      borderBottom: "1px solid #333",
    },
    gridContainer: {
      flex: 1,
      backgroundColor: "#337ab7",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
      padding: "10px",
    },
    button: {
      backgroundColor: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "20px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  const handleClick = (num) => {
    alert(`You clicked button ${num}`);
  };

  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div style={styles.phoneContainer}>
      <div style={styles.statusBar}>status bar</div>
      <div style={styles.gridContainer}>
        {numbers.map((num) => (
          <button
            key={num}
            style={styles.button}
            onClick={() => handleClick(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PhoneScreen;