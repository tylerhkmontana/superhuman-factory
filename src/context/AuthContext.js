import { useContext, useMemo, createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { googleLogout } from '@react-oauth/google';
import Cookie from 'js-cookie';
import axios from 'axios';
import { apiUrl } from '../data/apiUrl';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [registeringUser, setRegisteringUser] = useState(null);

  useEffect(() => {
    const user = Cookie.get('user');
    if (user) {
      console.log(JSON.parse(user));
      setUser(JSON.parse(user));
    }
  }, []);

  const login = (token) => {
    const userData = jwtDecode(token);
    axios
      .post(`${apiUrl}/user/login`, { user: userData, token })
      .then((response) => {
        const { user, registered } = response.data;
        if (registered) {
          Cookie.set('user', JSON.stringify(user), {
            expires: 7,
            secure: true,
          });
          setUser(user);
        } else {
          let inTenMinutes = 1 / 144;
          Cookie.set('registering_token', user.registeringToken, {
            expires: inTenMinutes,
            secure: true,
          });
          setRegisteringUser(user);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    Cookie.remove('user');
    googleLogout();
    setUser(null);
  };

  const registerUser = (user) => {
    const registeringToken = Cookie.get('registering_token');

    if (!registeringToken) {
      setRegisteringUser(null);
    } else {
      axios
        .post(`${apiUrl}/user/register`, { user, registeringToken })
        .then((response) => {
          const { user } = response.data;
          Cookie.set('user', JSON.stringify(user), {
            expires: 7,
            secure: true,
          });
          Cookie.remove('registering_token');
          setUser(user);
          setRegisteringUser(null);
        })
        .catch((error) => {
          console.log(error);
          setRegisteringUser(null);
        });
    }
  };

  const updateUser = (key, value) => {
    const updatedUser = {
      ...user,
      [key]: value,
    };
    setUser(updatedUser);
    Cookie.set('user', JSON.stringify(updatedUser), {
      expires: 7,
      secure: true,
    });
  };

  const value = useMemo(
    () => ({ user, registeringUser, login, logout, registerUser, updateUser }),
    [user, registeringUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
