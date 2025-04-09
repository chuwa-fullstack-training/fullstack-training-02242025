import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Users from "./routes/Users";
import Profile from './routes/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />} />
          <Route path="profile/:index" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;