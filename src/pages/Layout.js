import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Nav from "../components/Nav";

export default function Layout() {
  const { logout } = useAuth();
  return (
    <div>
      <Nav />
      <button onClick={logout}>Logout</button>
      <Outlet />
    </div>
  );
}
