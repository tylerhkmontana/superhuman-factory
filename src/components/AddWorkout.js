import exercises from "../data/exercises.json";
import CustomDataList from "./CustomDataList";
import { useState } from "react";

export default function AddWorkout({ isToggled, setIsToggled }) {
  const [workoutInfo, setWorkoutInfo] = useState({
    workout: "",
    load_type: "",
    percentage: 0,
    num_sets: 0,
    rep_type: "",
    num_reps: 999,
  });
  const formHandler = (e) => {
    const { name, value } = e.target;
    setWorkoutInfo((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(workoutInfo);
  };

  const customDataListSelectHandler = (option) => {
    setWorkoutInfo((prev) => ({ ...prev, workout: option }));
  };
  return (
    <div
      className={`fixed z-50 w-screen h-screen backdrop-blur-sm top-0 left-0 ${
        isToggled || "hidden"
      } py-24 px-4 flex justify-center items-center`}
    >
      <form
        className="w-full min-h-64 bg-gray-200 relative flex flex-col py-12 px-4 gap-4"
        onSubmit={(e) => submitHandler(e)}
        onChange={(e) => formHandler(e)}
      >
        <span
          className="font-bold absolute top-4 right-4"
          onClick={() => setIsToggled(false)}
        >
          X
        </span>
        <h3 className="font-bold text-2xl">Add Workout</h3>
        <br />
        <div className="flex justify-between">
          <label htmlFor="workout">Workout: </label>
          <CustomDataList
            options={exercises.map((ex) => ex.Exercise_Name)}
            name="workout"
            id="workout"
            selectHandler={customDataListSelectHandler}
          />
        </div>

        <div className="flex justify-between">
          <legend>Load Type:</legend>

          <div className="flex gap-1">
            <input
              type="radio"
              id="fixed_weight"
              name="load_type"
              value="fixed_weight"
              required
            />
            <label htmlFor="fixed_weight">Fixed Weight</label>
          </div>

          <div className="flex gap-1">
            <input
              type="radio"
              id="percent_onerm"
              name="load_type"
              value="percent_onerm"
              required
            />
            <label htmlFor="percent_onerm">% of 1RM</label>
          </div>
        </div>

        {workoutInfo.load_type === "percent_onerm" && (
          <div className="flex justify-between">
            <label htmlFor="percentage">Load (% of 1RM):</label>
            <input
              id="percentage"
              name="percentage"
              type="number"
              min={1}
              max={100}
              step={1}
              required
            />
          </div>
        )}

        <div className="flex justify-between">
          <label># of Sets: </label>
          <input
            type="number"
            step={1}
            min={1}
            max={50}
            name="num_sets"
            required
          />
        </div>

        <div>
          <legend>Repetition Type: </legend>
          <div className="flex gap-1">
            <input
              type="radio"
              id="to_failure"
              name="rep_type"
              value="to_failure"
              required
            />
            <label htmlFor="to_failure">To Failure</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              id="min_reps_to_failure"
              name="rep_type"
              value="min_reps_to_failure"
              required
            />
            <label htmlFor="min_reps_to_failure">Min Reps To Failure</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              id="fixed_reps"
              name="rep_type"
              value="fixed_reps"
              required
            />
            <label htmlFor="fixed_reps">Fixed Reps</label>
          </div>
        </div>

        {workoutInfo.rep_type === "to_failure" ? (
          <div className="flex justify-between">
            <p># of Reps: </p>
            <span>999+</span>
          </div>
        ) : (
          <div className="flex justify-between">
            <label>
              {workoutInfo.rep_type === "min_reps_to_failure" ? "Min" : "# of"}{" "}
              Reps:
            </label>
            <input
              type="number"
              step={1}
              min={1}
              max={1000}
              name="num_reps"
              required
            />
          </div>
        )}

        <br />
        <button>Add</button>
      </form>
    </div>
  );
}
