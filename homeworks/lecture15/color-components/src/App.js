import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ComponentList from "./ComponentList";
import ComponentEditor from "./ComponentEditor";

export default function App() {
  const [components, setComponents] = useState([
    { name: "aaron", color: "#fdeacc" },
    { name: "second", color: "#ffffff" },
    { name: "third", color: "#ffffff" },
    { name: "fourth", color: "#ffffff" },
    { name: "fifth", color: "#ffffff" },
    { name: "sixth", color: "#ffffff" }
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/components" />} />
        <Route path="/components" element={<ComponentList components={components} />} />
        <Route
          path="/components/:id"
          element={<ComponentEditor components={components} setComponents={setComponents} />}
        />
      </Routes>
    </Router>
  );
}
