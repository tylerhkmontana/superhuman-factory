import { useLocation, useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AddExercise from "../../components/AddExercise";

export default function EditSession() {
  const { week, session, programId } = useParams();
  const location = useLocation();
  const { program } = location.state;
  const exercises = program.routine[week].sessions[session];
  const [toggleAddExercise, setToggleAddExercise] = useState(false);

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
              <div className="flex flex-col gap-2 border-2 p-2" key={i}>
                <h4 className="font-bold">{exercise.name}</h4>
                <p>Load: {exercise.load_type}</p>
                <p># of sets: {exercise.num_sets}</p>
                <p>
                  # of reps:{" "}
                  {exercise.rep_type === "to_failure"
                    ? "to_failure"
                    : exercise.num_reps}
                </p>
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
