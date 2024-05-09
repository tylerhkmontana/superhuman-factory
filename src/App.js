import { useAuth } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page Component
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Program from "./pages/Program";
function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <main className="w-full flex flex-col items-center mt-8">
        {user ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/program" element={<Program />} />
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
