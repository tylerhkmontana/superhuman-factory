import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Program() {
  const { id } = useParams();
  return (
    <div className="w-full">
      <Link to="/training">&larr; Back</Link>
      <h1>Program {id}</h1>
    </div>
  );
}
