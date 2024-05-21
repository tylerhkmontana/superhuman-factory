import { useContext, useMemo, createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";
import Cookie from "js-cookie";
import axios from "axios";
import { apiUrl } from "../data/apiUrl";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [registeringUser, setRegisteringUser] = useState(null);

  useEffect(() => {
    const user = Cookie.get("user");
    if (user) {
      // console.log(JSON.parse(user));
      setUser(JSON.parse(user));
    }
  }, []);

  const login = (token) => {
    /* 
      Change here so that it sends token to the server and server authenticate the user
      using its email and sub, and send back the user information
    */
    const userData = jwtDecode(token);
    axios
      .post(`${apiUrl}/user/login`, { user: userData, token })
      .then((response) => {
        const { user, registered, token } = response.data;
        if (registered) {
          Cookie.set("token", token, { expires: 7, secure: true });
          Cookie.set("user", JSON.stringify(user), {
            expires: 7,
            secure: true,
          });
          setUser(user);
        } else {
          console.log("Registering...", user);
          let inFifteenMinutes = 1 / 96;
          Cookie.set("registering_token", token, {
            expires: inFifteenMinutes,
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

  const value = useMemo(
    () => ({ user, registeringUser, login, logout, updateUser }),
    [user, registeringUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
