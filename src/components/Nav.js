import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/program">Program</Link>
      </li>
    </ul>
  );
}
