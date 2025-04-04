import React, { useState } from "react";

const App = () => {
  const buttons = Array.from({ length: 20 }, (_, i) => i + 1);
  const [bar, setBar] = useState("");

  const handleChange = (button) => {
    setBar((prev) => prev + `${button}`);
  };
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>{bar}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "80px 80px 80px 80px",
          gridTemplateRows: "80px 80px 80px 80px 80px",
          gap: "10px",
        }}
      >
        {buttons.map((button) => (
          <button onClick={() => handleChange(button)}>{button}</button>
        ))}
      </div>
    </div>
  );
};

export default App;
