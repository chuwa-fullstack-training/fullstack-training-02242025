import React, { createContext, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "test" && password === "123") {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

// Home
function HomePage() {
  const { user, logout } = useAuth();
  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <p>
          Logged in as <strong>{user.username}</strong>.{" "}
          <button onClick={logout}>Logout</button>
        </p>
      ) : (
        <p>
          <Link to="/login">Login</Link>
        </p>
      )}
      <p>
        <Link to="/users">View Users</Link>
      </p>
    </div>
  );
}

// Login Page
function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      alert("Invalid credentials (try: test / 123)");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <div>
          <label>
            Username: <br />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <label>
            Password: <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button style={{ marginTop: "1rem" }} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

// Users Page
function UsersPage() {
  const users = ["mojombo", "defunkt", "pjhyett", "wycats", "ezmobius"];
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((login) => (
          <li key={login}>
            <Link to={`/users/${login}`}>{login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserDetailPage() {
  const { login } = useParams();
  return (
    <div>
      <h1>User Detail</h1>
      <p>
        <strong>Login:</strong> {login}
      </p>
      <p>Here you could fetch and display user data from an API.</p>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/users"
            element={
              <RequireAuth>
                <UsersPage />
              </RequireAuth>
            }
          />
          <Route
            path="/users/:login"
            element={
              <RequireAuth>
                <UserDetailPage />
              </RequireAuth>
            }
          />

          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
