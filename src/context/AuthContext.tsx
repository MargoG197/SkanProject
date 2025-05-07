import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { loginAxios } from '../api/loginApi';
import { TToken, TAuth } from '../api/loginApi';

type TAuthContext = {
  isAuthenticated: boolean
  login: (data:TAuth) => Promise<void|TToken>
  logout: () => void
  token: string|null
  tokenExpirationTime:string|null
}

async function getLogin(data:TAuth) {
  try {
    await loginAxios(data);
  } catch (err) {
    console.log(err)
  }
}


const defaultAuthcontext:TAuthContext = {
  isAuthenticated: localStorage.getItem('token') && localStorage.getItem('expirationToken') ? true : false,
  login: getLogin,
  logout: () => { },
  token: null,
  tokenExpirationTime:null
};


const AuthContext = createContext<TAuthContext>(defaultAuthcontext);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [token, setToken] = useState<string | null>(localStorage.getItem('token') ? localStorage.getItem('token') as string : null);
const [tokenExpirationTime , setTokenExpirationTime ] = useState<string|null>(localStorage.getItem('expirationToken') ? localStorage.getItem('expirationToken') as string : null)

async function getLogin(data:TAuth) {
  try {
    const result = await loginAxios(data);
      setIsAuthenticated(true);
      setToken(result.accessToken);
      setTokenExpirationTime(result.expire);
      localStorage.setItem('token', `${result.accessToken}`)
      localStorage.setItem('expirationToken', `${result.expire}`)
      console.log(result)

  } catch (err) {
    console.log(err)
    }
}
  
  const logoutFunc = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    setToken(null);
    setTokenExpirationTime(null)
  };

  useEffect(() => {
    if (token && tokenExpirationTime) {
    const now = new Date();
    const exp = new Date(tokenExpirationTime)
    if (((+exp - +now)/ (1000 * 60)) > 10) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }
  }, [])
 
  setInterval(() => {
    if (token && tokenExpirationTime) {
      const now = new Date();
      const exp = new Date(tokenExpirationTime)
      if (((+exp - +now)/ (1000 * 60)) > 10) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    }
  }, 60000)


  const login = useCallback((data:TAuth) => getLogin(data), []);
  const logout = useCallback(() => logoutFunc(), []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token, tokenExpirationTime }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);