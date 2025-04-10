import React, { useState } from 'react';
import GitHubUsers from './GitHubUsers.jsx';
import UserDetailPage from './UserDetailPage.jsx';

import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={() => navigate('/login')}>Go to Login Page</button>
    </div>
  );
};

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'username' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      navigate('/welcome');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

const WelcomePage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome user</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/welcome" element={<WelcomePage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/users" element={<ProtectedRoute isLoggedIn={isLoggedIn}> <GitHubUsers /> </ProtectedRoute> }/>
        <Route path="/users/:login" element={ <ProtectedRoute isLoggedIn={isLoggedIn}> <UserDetailPage /> </ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
}
