import { useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { apiUrl } from "../../data/apiUrl";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";

export default function CustomProgram() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [program, setProgram] = useState(location.state);

  const deleteProgram = (programId) => {
    const currUser = JSON.parse(Cookie.get("user"));

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
      <br />
      <br />
      <h1 className="font-bold text-2xl">{program.title}</h1>
      <p>{program.num_weeks} weeks</p>
      <br />
      <p>{program.training_goal}</p>
      <br />

      <div className="flex flex-col gap-2">
        {Object.keys(program.routine).map((week, i) => (
          <div className="border-2 p-2" key={i}>
            <h2>WEEK {i + 1}</h2>
            <div>
              {program.routine[week].sessions.map((session, i) => (
                <div key={i}>
                  <h3>{session.workout}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br />
      <button
        className="bg-red-500 text-white"
        onClick={() => deleteProgram(id)}
      >
        Delete
      </button>
    </div>
  );
}
