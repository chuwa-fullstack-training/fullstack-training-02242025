import React from "react";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div className="header" style={{ border: "2px solid" }}>
          Header
        </div>
        <div className="nav" style={{ border: "2px solid" }}>
          Nav
        </div>
        <div className="content" style={{ display: "flex" }}>
          <div className="aside" style={{ border: "2px solid", flex: 1 }}>
            Aside
          </div>
          <div className="section" style={{ border: "2px solid", flex: 2 }}>
            Section
          </div>
        </div>
        <div className="footer" style={{ border: "2px solid" }}>
          Footer
        </div>
      </div>
    );
  }
}
export default App;
