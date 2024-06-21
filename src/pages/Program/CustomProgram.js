import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { apiUrl } from "../../data/apiUrl";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function CustomProgram() {
  const { programId } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}/program/${programId}`)
      .then((response) => {
        const customProgram = response.data[0];
        setProgram(customProgram);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteProgram = (programId) => {
    const currUser = JSON.parse(Cookie.get("user"));

    axios
      .delete(`${apiUrl}/program/delete/${programId}`, {
        data: { user: currUser },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/training");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createSessions = (e, targetWeek) => {
    e.preventDefault();

    const currUser = JSON.parse(Cookie.get("user"));
    const num_days = e.target.elements["num_days"].value;
    let updatedProgram = { ...program };

    for (let i = 1; i <= num_days; i++) {
      updatedProgram.routine[targetWeek].sessions[`day${i}`] = [];
    }

    axios
      .put(`${apiUrl}/program/update/routine`, {
        program: updatedProgram,
        user: currUser,
      })
      .then((response) => {
        console.log(response.data);

        setProgram({ ...updatedProgram });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(updatedProgram);
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
                <div className="flex flex-wrap gap-4 justify-center">
                  {Object.keys(program.routine[week].sessions).length === 0 ? (
                    <form
                      className="flex flex-col gap-2"
                      onSubmit={(e) => createSessions(e, week)}
                    >
                      <p>
                        How many days of training in{" "}
                        <strong>WEEK {i + 1}?</strong>
                      </p>
                      <input
                        name="num_days"
                        type="number"
                        step={1}
                        min={1}
                        max={7}
                        required
                        placeholder="1 - 7"
                        className="text-center w-auto"
                      />
                      <button>initialize</button>
                    </form>
                  ) : (
                    Object.keys(program.routine[week].sessions).map(
                      (session, i) => (
                        <Link
                          to={`/program/custom/${programId}/${week}/${session}`}
                          state={{ program }}
                          key={i}
                        >
                          <span className="rounded-full w-16 h-16 flex items-center justify-center text-white bg-gray-600">
                            DAY {i + 1}
                          </span>
                        </Link>
                      )
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <br />
          <button
            className="bg-red-500 text-white"
            onClick={() => deleteProgram(programId)}
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
