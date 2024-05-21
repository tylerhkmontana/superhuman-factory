import { useAuth } from '../context/AuthContext';
import PR from '../components/PR';

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="w-full">
      <p>
        Welcome! {user.given_name} {user.family_name}
      </p>
      <p>Updated At{user.dob}</p>
      <br />
      <PR user={user} />
      <br />
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}
