import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Layout() {
  return (
    <div className="w-full p-2 pt-8">
      <Nav />
      <Outlet />
    </div>
  );
}
