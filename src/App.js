import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page Component
import Login from "./pages/Login";
import LayoutProtected from "./pages/LayoutProtected";
import Home from "./pages/Home";
import Training from "./pages/Training";
import Log from "./pages/Log";
import Profile from "./pages/Profile";
import CustomProgram from "./pages/Program/CustomProgram";
import PremadeProgram from "./pages/Program/PremadeProgram";
import CreateSession from "./pages/Program/CreateSession";

//Fontawesome library
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
library.add(fas, faTwitter, faFontAwesome);

function App() {
  return (
    <div className="App">
      <main className="w-screen flex flex-col items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LayoutProtected />}>
              <Route index element={<Home />} />
              <Route path="/training" element={<Training />} />
              <Route path="/log" element={<Log />} />
              <Route path="/program/custom/:id" element={<CustomProgram />} />
              <Route
                path="/program/custom/:id/:week"
                element={<CreateSession />}
              />
              <Route path="/program/premade/:id" element={<PremadeProgram />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Home />} />
            </Route>
            <Route></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
