import { useParams, Link } from "react-router-dom";
export default function CreateSession() {
  const { id, week } = useParams();
  return (
    <div>
      <Link to={`/program/custom/${id}`}>&larr; Back</Link>

      <p>Program {id}</p>
      <p>{week}</p>
    </div>
  );
}
