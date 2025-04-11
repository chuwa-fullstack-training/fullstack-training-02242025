import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
  import { AuthProvider, useAuth } from "./AuthContext";
  import PrivateRoute from "./PrivateRoute";
  import Login from "./Login";
  import UserList from "./UserList";
  import UserProfile from "./UserProfile";
  
  function Home() {
    const { isLoggedIn, logout } = useAuth();
  
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Home</h1>
        {isLoggedIn ? (
          <>
            <p>Welcome username</p>
            <button onClick={logout}>Log out</button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    );
  }
  
  export default function App() {
    return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
  
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UserList />
                </PrivateRoute>
              }
            />
  
            <Route
              path="/users/:login"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            />
  
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </AuthProvider>
    );
  }
  