import React, { useState } from 'react';
import AuthContext from './authContext';

const AuthProvider = ({ children }) => {
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

export default AuthProvider;
