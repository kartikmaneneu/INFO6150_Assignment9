import { createContext, useContext, useMemo, useState } from 'react';
import api from '../api/axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('jobPortalUser');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email, password) => {
    const response = await api.post('/user/login', { email, password });
    const authenticatedUser = response.data.user;
    localStorage.setItem('jobPortalUser', JSON.stringify(authenticatedUser));
    setUser(authenticatedUser);
    return authenticatedUser;
  };

  const logout = () => {
    localStorage.removeItem('jobPortalUser');
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
