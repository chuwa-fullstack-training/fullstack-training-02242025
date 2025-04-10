// Layout.jsx
import React from "react";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Header</h1>
      </header>
      
      <nav className="nav">Nav</nav>
      
      <div className="main-content">
        <aside className="aside">Aside</aside>
        <section className="section">Section</section>
      </div>
      
      <footer className="footer">
        <strong>Footer</strong>
      </footer>
    </div>
  );
};

export default Layout;