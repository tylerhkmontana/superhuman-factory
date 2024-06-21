import { useLocation, useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AddWorkout from "../../components/AddWorkout";

export default function EditSession() {
  const { week, session, programId } = useParams();
  const location = useLocation();
  const { program } = location.state;
  const workouts = program.routine[week].sessions[session];
  const [addWorkout, setAddWorkout] = useState(false);

  console.log(workouts);
  return (
    <div>
      <AddWorkout isToggled={addWorkout} setIsToggled={setAddWorkout} />
      <Link to={`/program/custom/${programId}`}>&larr; Back</Link>
      <br />
      <br />
      <div className="flex flex-col gap-4">
        {workouts.length === 0 ? (
          <p className="text-center">Add your workout</p>
        ) : (
          <div>
            {workouts.map((workout, i) => (
              <div key={i}>{workout.name}</div>
            ))}
          </div>
        )}
        <FontAwesomeIcon
          size="3x"
          icon="fa-solid fa-circle-plus"
          onClick={() => setAddWorkout(true)}
        />
      </div>
    </div>
  );
}
