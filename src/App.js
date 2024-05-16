import { useAuth } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page Component
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Program from "./pages/Program";
import Profile from "./pages/Profile";

//Fontawesome library
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
library.add(fas, faTwitter, faFontAwesome);

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <main className="p-4 w-screen flex flex-col items-center">
        {user ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/program" element={<Program />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        ) : (
          <Login />
        )}
      </main>
    </div>
  );
}

export default App;
