import React, { createContext, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

// Auth Context Setup
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "test" && password === "123") {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// Pages
const HomePage = () => {
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
};

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
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
        <button type="submit" style={{ marginTop: "1rem" }}>
          Login
        </button>
      </form>
    </div>
  );
};

const UsersPage = () => {
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
};

const UserDetailPage = () => {
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
};

// App Component
const App = () => {
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
};

export default App;