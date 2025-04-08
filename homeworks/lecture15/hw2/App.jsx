import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ComponentBoard from "./ComponentBoard";
import Color from "./Color";
import { COLORS } from "./constant";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <ComponentBoard />
      <nav>
        <ul>
          {COLORS.map((color) => {
            return (
              <li key={color}>
                <Link to={`/${color.toLocaleLowerCase()}`}>{color}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Routes>
        {COLORS.map((color) => (
          <Route
            path={`/${color.toLocaleLowerCase()}`}
            element={<Color color={color} />}
          />
        ))}
      </Routes>
    </Router>
  );
}
