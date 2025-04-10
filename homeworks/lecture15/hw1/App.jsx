import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './Login';
import Users from './Users';
import UserProfile from './UserProfile';
import { AuthProvider, useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/users/:login" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
