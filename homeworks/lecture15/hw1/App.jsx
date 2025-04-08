import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import User from "./User";
import UserCard from "./UserCard";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";

import "./styles.css";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/users" element={<User />} />
            <Route path="/users/:login" element={<UserCard />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}
