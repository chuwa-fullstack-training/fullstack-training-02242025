import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/users");

  const login = (callback) => {
    setIsLoggedIn(true);
    callback();
  };

  const logout = () => {
    const logout = () => {
        setIsLoggedIn(false);
        setRedirectPath("/users");
      };
      
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, redirectPath, setRedirectPath }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
