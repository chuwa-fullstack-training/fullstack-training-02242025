import React from "react";

function PhoneScreen() {
  const phoneContainerStyle = {
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
  };

  const statusBarStyle = {
    height: "50px",
    backgroundColor: "#888",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    borderBottom: "1px solid #333",
  };

  const gridContainerStyle = {
    flex: 1,
    backgroundColor: "#337ab7", // Blue background
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "10px",
    padding: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  // click event
  const handleClick = (num) => {
    alert(`You clicked button ${num}`);
  };

  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div style={phoneContainerStyle}>
      <div style={statusBarStyle}>status bar</div>
      <div style={gridContainerStyle}>
        {numbers.map((num) => (
          <button
            key={num}
            style={buttonStyle}
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
