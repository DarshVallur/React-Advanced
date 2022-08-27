import React, { createContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provide value={{ user, login, logout }}>
      {children}
    </AuthContext.Provide>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
