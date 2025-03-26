import React from "react";
import "../App.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Header</h1>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </nav>

      <div className="content-wrapper">
        <aside className="aside">Aside</aside>

        <main className="main">
          <h2>Main Content</h2>
          {children}
        </main>
      </div>

      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
