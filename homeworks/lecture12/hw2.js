import React from "react";

const App = () => {
  return (
    <div className="App">
      <header
        style={{
          border: "5px solid grey",
          textAlign: "center",
          marginBottom: "5px",
        }}
      >
        <h1>Header</h1>
      </header>

      <nav
        style={{
          border: "5px solid grey",
          textAlign: "center",
          marginBottom: "5px",
        }}
      >
        <h1>Nav</h1>
      </nav>

      <div
        style={{
          display: "flex",
          gap: "3px",
          fontSize: "30px",
          marginBottom: "5px",
        }}
      >
        <aside
          style={{
            border: "5px solid grey",
            flex: 1,
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Aside
        </aside>
        <section
          style={{
            border: "5px solid grey",
            flex: 3,
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Section
        </section>
      </div>

      <footer
        style={{
          border: "5px solid grey",
          textAlign: "center",
          marginBottom: "5px",
        }}
      >
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default App;
