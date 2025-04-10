import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import GitHubUserBrowser from './UserDetail';
import UserDetail from './UserDetail';
import Login from './Login';
import { AuthProvider, useAuth } from './auth';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  return user ? children : <Navigate to="/login" state={{ from: location }} />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<ProtectedRoute><GitHubUserBrowser /></ProtectedRoute>} />
          <Route path="/users/:login" element={<ProtectedRoute><UserDetail /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/users" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
