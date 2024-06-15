import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { apiUrl } from "../../data/apiUrl";
import { useNavigate } from "react-router-dom";

export default function CustomProgram() {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteProgram = (programId) => {
    const currUser = JSON.parse(Cookie.get("user"));
    console.log(currUser);
    axios
      .delete(`${apiUrl}/program/delete`, {
        data: { programId, user: currUser },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/training");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full">
      <Link to="/training">&larr; Back</Link>
      <h1>Program {id}</h1>
      <button
        className="bg-red-500 text-white"
        onClick={() => deleteProgram(id)}
      >
        Delete
      </button>
    </div>
  );
}
