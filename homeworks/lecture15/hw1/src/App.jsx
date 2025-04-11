import { Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./ProfileContext";
import Content from "./Users";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(() => localStorage.getItem("user") || null);
  return (
    <ProfileProvider>
      <Routes>
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/users" element={<Content user={user} />} />
        <Route path="/users/:userId" element={<Profile />} />
        <Route
          exact
          path="/"
          element={<Home user={user} setUser={setUser} />}
        />
      </Routes>
    </ProfileProvider>
  );
}

// ✅ This is an example of a closure because:

// setUser is defined inside App.js (inside useState).

// When setUser is passed to Login.js, it remembers the App.js state.

// Calling setUser inside Login.js still modifies user in App.js.

// Closures happen when an inner function (like setUser in Login.js) remembers the variables from its outer function (App.js) even after the outer function has finished executing.
