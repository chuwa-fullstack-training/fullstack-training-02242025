import React from "react";

function Layout() {
  const containerStyle = {
    display: "grid",
    gridTemplateRows: "auto auto 1fr auto",
    gridTemplateColumns: "1fr",
    gap: "1rem",
    padding: "1rem",
    boxSizing: "border-box",
  };

  const areaStyle = {
    border: "1px solid #000",
    padding: "1rem",
    backgroundColor: "#f7f7f7",
  };

  const mainStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    gap: "1rem",
  };

  return (
    <div style={containerStyle}>
      <header style={areaStyle}>Header</header>
      <nav style={areaStyle}>Nav</nav>
      <div style={mainStyle}>
        <aside style={areaStyle}>Aside</aside>
        <section style={areaStyle}>Section</section>
      </div>
      <footer style={areaStyle}>Footer</footer>
    </div>
  );
}

export default Layout;
