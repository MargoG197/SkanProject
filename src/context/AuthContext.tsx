import React, { createContext, useState, useContext, useCallback } from 'react';
import { loginAxios } from '../api/loginApi';
import { TToken, TAuth } from '../api/loginApi';

type TAuthContext = {
  isAuthenticated: boolean
  login: (data:TAuth) => Promise<void|TToken>
  logout:()=>void
}

async function getLogin(data:TAuth) {
  try {
    await loginAxios(data);
  } catch (err) {
    console.log(err)
  }
}


// if (localStorage.getItem('expirationToken')) {
//   const now = new Date();
//   const expirationTime = new Date(localStorage.getItem('expirationToken') as string )
// }


const defaultAuthcontext:TAuthContext = {
  isAuthenticated: localStorage.getItem('token') && localStorage.getItem('expirationToken') ? true : false,
  login: getLogin,
  logout:()=>{}
};


const AuthContext = createContext<TAuthContext>(defaultAuthcontext);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
const [isAuthenticated, setIsAuthenticated] = useState(false);
  
async function getLogin(data:TAuth) {
  try {
    const response = await loginAxios(data);
    if (response) {
      setIsAuthenticated(true);
      localStorage.setItem('token', `${response.accessToken}`)
      localStorage.setItem('expirationToken', `${response.expire}`)
}
  } catch (err) {
    console.log(err)
  }

}

  const login = useCallback((data:TAuth) => getLogin(data), []);
  const logout = useCallback(() => setIsAuthenticated(false), []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);