import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { apiUrl } from "../../data/apiUrl";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomProgram() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}/program/${id}`)
      .then((response) => {
        const customProgram = response.data[0];

        setProgram(customProgram);
      })
      .catch((error) => console.log(error));
  });

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
      {program ? (
        <>
          <h1 className="font-bold text-2xl">{program.title}</h1>
          <p>{program.num_weeks} weeks</p>
          <br />
          <p>{program.training_goal}</p>
          <br />

          <div className="flex flex-col gap-2">
            {Object.keys(program.routine).map((week, i) => (
              <div
                className="border-2 p-2 flex flex-col gap-2 items-center"
                key={i}
              >
                <h2 className="font-bold self-start">WEEK {i + 1}</h2>
                <div>
                  {program.routine[week].sessions.length === 0 ? (
                    <p className="text-sm text-center text-gray-500">
                      No session has been created.
                    </p>
                  ) : (
                    program.routine[week].sessions.map((session, i) => (
                      <div key={i}>
                        <h3>{session.workout}</h3>
                      </div>
                    ))
                  )}
                </div>
                <Link to={`/program/custom/${id}/${week}`}>
                  <FontAwesomeIcon size="2xl" icon="fa-solid fa-circle-plus" />
                </Link>
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
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
