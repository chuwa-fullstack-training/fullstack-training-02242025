import { Routes, Route, Navigate } from "react-router-dom";
import ComponentList from "./ComponentList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/components/0" replace />} />

      <Route path="/components/:id" element={<ComponentList />} />
      <Route path="*" element={<Navigate to="/components/0" replace />} />
    </Routes>
  );
}


