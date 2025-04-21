import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, setRedirectPath } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    setRedirectPath(location.pathname);
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
