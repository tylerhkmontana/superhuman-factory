import { useContext, useMemo, createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";
import Cookie from "js-cookie";
import axios from "axios";
import sign from "jwt-encode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      setUser(jwtDecode(token));
    }
  }, []);

  const login = (token) => {
    const userData = jwtDecode(token);
    axios
      .post(process.env.REACT_APP_API_URL + "/user/newUser", userData)
      .then((response) => {
        console.log(response);
        Cookie.set("token", token, { expires: 7, secure: true });
        setUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    Cookie.remove("token");
    googleLogout();
    setUser(null);
  };

  const updateUser = (key, value) => {
    const updatedUser = {
      ...user,
      [key]: value,
    };
    setUser(updatedUser);
    Cookie.set("token", sign(updatedUser, "secret"), {
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
