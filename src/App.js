import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Cookie from "js-cookie";

function App() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      setProfile(jwtDecode(token));
    }
  }, []);

  const responseMessage = (response) => {
    const token = response.credential;
    setProfile(jwtDecode(token));
    Cookie.set("token", token, { expires: 7, secure: true });
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const logout = () => {
    Cookie.remove("token");
    setProfile(null);
  };
  return (
    <div className="App">
      <main className="w-full flex flex-col items-center mt-8">
        <h1 className="text-4xl">Welcome To Superhuman Factory</h1>
        <br />

        {profile ? (
          <div>
            <p>Welcome!</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        )}
      </main>
      <br />
      <br />
    </div>
  );
}

export default App;
