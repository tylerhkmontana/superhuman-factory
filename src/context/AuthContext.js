import { useContext, useMemo, createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";
import Cookie from "js-cookie";
import axios from "axios";
import { apiUrl } from "../data/apiUrl";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = Cookie.get("user");
    if (user) {
      // console.log(JSON.parse(user));
      setUser(JSON.parse(user));
    }
  }, []);

  const login = (token) => {
    const userData = jwtDecode(token);
    console.log(token);
    axios
      .post(`${apiUrl}/user/login`, userData)
      .then((response) => {
        const user = response.data.user;
        Cookie.set("user", JSON.stringify(user), { expires: 7, secure: true });
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    Cookie.remove("user");
    googleLogout();
    setUser(null);
  };

  const updateUser = (key, value) => {
    const updatedUser = {
      ...user,
      [key]: value,
    };
    setUser(updatedUser);
    Cookie.set("user", JSON.stringify(updatedUser), {
      expires: 7,
      secure: true,
    });
  };

  const value = useMemo(() => ({ user, login, logout, updateUser }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
