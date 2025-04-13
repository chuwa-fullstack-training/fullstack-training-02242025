import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const isAuthenticated = () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  return username && password;
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  return isAuthenticated() ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
