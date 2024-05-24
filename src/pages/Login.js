import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Register from "../components/Register";

export default function Login() {
  const { user, login, registeringUser } = useAuth();
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    if (registeringUser) {
      const { given_name, family_name, email, sub } = registeringUser;
      setNewUser({
        sub,
        email,
        given_name,
        family_name,
      });
    }
  }, [registeringUser]);

  if (user) {
    return <Navigate to="/" replace />;
  }

  const responseMessage = (response) => {
    const token = response.credential;
    login(token);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="flex flex-col items-center p-6 pt-8 w-screen">
      <h1 className="text-4xl font-title">Superhuman Factory</h1>
      <br />
      <br />
      {registeringUser ? (
        <Register newUser={newUser} setNewUser={setNewUser} />
      ) : (
        <>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <br />
          <br />
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </>
      )}
    </div>
  );
}
