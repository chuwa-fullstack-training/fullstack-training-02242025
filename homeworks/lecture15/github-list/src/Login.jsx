import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    const redirectTo = location.state?.from?.pathname || "/users";
    navigate(redirectTo, { replace: true });
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:{" "}
          <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
