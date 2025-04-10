import React, { createContext, useState, useContext } from 'react';
import { fakeAuthProvider } from './auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signin = (username, callback) => {
    fakeAuthProvider.signin(() => {
      setUser(username);
      callback();
    });
  };

  const signout = (callback) => {
    fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
