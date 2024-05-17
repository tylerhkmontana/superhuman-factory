import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="flex gap-4 fixed items-center justify-between bg-gray-400 w-full top-0 left-0 px-4 py-2">
      <div>
        <h1 className="text-xl font-title">Superhuman Factory</h1>
      </div>
      <FontAwesomeIcon
        icon="fa-solid fa-caret-down"
        onClick={() => setIsToggled((prev) => !prev)}
      />
      {isToggled && (
        <ul
          className="flex flex-col bg-gray-400 gap-2 absolute right-2 top-12 p-2"
          onClick={() => setIsToggled(false)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/program">Program</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
