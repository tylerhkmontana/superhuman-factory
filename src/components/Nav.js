import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      {/* <div>
        <h1 className="text-xl font-title">Superhuman Factory</h1>
      </div> */}

      <ul
        className="fixed bottom-0 left-0 justify-evenly w-screen flex bg-gray-400 gap-2 p-2"
        onClick={() => setIsToggled(false)}
      >
        <li>
          <Link to="/">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon="fa-solid fa-house" />
              <p className="text-xs">Home</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/training">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon="fa-solid fa-dumbbell" />
              <p className="text-xs">Training</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/log">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon="fa-solid fa-calendar" />
              <p className="text-xs">Log</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon="fa-solid fa-user" />
              <p className="text-xs">Profile</p>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}
