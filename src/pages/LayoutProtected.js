import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Nav from '../components/Nav';

export default function LayoutProtected() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  return (
    <div className="w-full p-6 pt-12">
      <Nav />
      <Outlet />
    </div>
  );
}
