import { useAuth } from "../context/AuthContext.js";

import WendlerProgram from "../components/WendlerProgram.js";

export default function Program() {
  const { user } = useAuth();
  return (
    <div className="flex flex-col items-center">
      <br />
      <WendlerProgram pr={user.pr} />
    </div>
  );
}
