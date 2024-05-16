import { useAuth } from "../context/AuthContext";
import PR from "../components/PR";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="w-full">
      <p>
        Welcome! {user.given_name} {user.family_name}
      </p>
      <br />
      <PR user={user} />
    </div>
  );
}
