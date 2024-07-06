// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username, password) => {
    // Replace with actual API call to ReqRes API for authentication
    // For demo purposes, consider a mock implementation
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      throw new Error('Invalid username or password');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
