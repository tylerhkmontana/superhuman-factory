import { useLocation, useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AddExercise from "../../components/AddExercise";
import axios from "axios";
import Cookie from "js-cookie";
import { apiUrl } from "../../data/apiUrl";

export default function EditSession() {
  const { week, session, programId } = useParams();
  const location = useLocation();
  let { program } = location.state;
  const [exercises, setExercises] = useState(
    program.routine[week].sessions[session]
  );
  const [toggleAddExercise, setToggleAddExercise] = useState(false);

  const repSelector = (rep_type, reps) => {
    if (rep_type === "to_failure") {
      return "To Failure";
    } else if (rep_type === "min_reps_to_failure") {
      return `${reps}+`;
    } else {
      return reps;
    }
  };

  const deleteExercise = (index) => {
    let updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    const currUser = JSON.parse(Cookie.get("user"));

    let updatedProgram = { ...program };
    updatedProgram.routine[week].sessions[session] = updatedExercises;

    axios
      .put(`${apiUrl}/program/update/routine`, {
        program: updatedProgram,
        user: currUser,
      })
      .then((response) => {
        program = response.data;

        setExercises(updatedExercises);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <AddExercise
        isToggled={toggleAddExercise}
        setIsToggled={setToggleAddExercise}
        program={program}
        week={week}
        session={session}
      />
      <Link to={`/program/custom/${programId}`}>&larr; Back</Link>
      <br />
      <br />
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl">Exercises</h3>
        {exercises.length === 0 ? (
          <p className="text-center">Add your exercise</p>
        ) : (
          <div className="flex flex-col gap-2">
            {exercises.map((exercise, i) => (
              <div
                className="flex items-stretch border-2 p-2 gap-2 relative"
                key={i}
              >
                <span
                  className="text-red-500 absolute top-2 right-2 font-bold"
                  onClick={() => deleteExercise(i)}
                >
                  X
                </span>
                {/* <div className="flex flex-col justify-between">
                  <span className="rounded-full bg-gray-500 w-6 h-6 flex items-center justify-center text-white text-sm">
                    &uarr;
                  </span>
                  <span className="rounded-full bg-gray-500 w-6 h-6 flex items-center justify-center text-white text-sm">
                    &darr;
                  </span>
                </div> */}
                <div className="flex flex-col justify-between gap-2">
                  <h4 className="font-bold">{exercise.name}</h4>
                  <p>
                    {`${exercise.num_sets} x ${repSelector(
                      exercise.rep_type,
                      exercise.num_reps
                    )} (${
                      exercise.load_type === "percent_onerm"
                        ? `${exercise.percentage}% 1RM`
                        : "Training Weight"
                    })`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <FontAwesomeIcon
          size="3x"
          icon="fa-solid fa-circle-plus"
          onClick={() => setToggleAddExercise(true)}
        />
      </div>
    </div>
  );
}
