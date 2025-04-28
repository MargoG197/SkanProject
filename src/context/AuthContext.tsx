import React, { createContext, useState, useContext, useCallback } from 'react';


type TAuthContext = {
  isAuthenticated: boolean
  login: () => void
  logout:()=>void
}


const defaultAuthcontext:TAuthContext = {
  isAuthenticated: false,
  login: () => {},
  logout:()=>{}
};


const AuthContext = createContext<TAuthContext>(defaultAuthcontext);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = useCallback(() => setIsAuthenticated(true), []);
  const logout = useCallback(() => setIsAuthenticated(false), []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);