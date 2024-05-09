import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <Outlet />
    </div>
  );
}
