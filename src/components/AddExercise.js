import axios from "axios";
import exercises from "../data/exercises.json";
import CustomDataList from "./CustomDataList";
import { useState } from "react";
import { apiUrl } from "../data/apiUrl";
import Cookie from "js-cookie";

export default function AddExercise({
  isToggled,
  setIsToggled,
  program,
  week,
  session,
}) {
  const [exerciseInfo, setExerciseInfo] = useState({
    name: "",
    load_type: "",
    percentage: 0,
    num_sets: 0,
    rep_type: "",
    num_reps: 0,
  });

  const initializeForm = () => {
    const initialized = {
      name: "",
      load_type: "",
      percentage: 0,
      num_sets: 0,
      rep_type: "",
      num_reps: 0,
    };
    setExerciseInfo(initialized);
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setExerciseInfo((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault(`${apiUrl}/program/update/routine`);
    const currUser = JSON.parse(Cookie.get("user"));

    let updatedProgram = { ...program };
    updatedProgram.routine[week].sessions[session].push(exerciseInfo);

    axios
      .put(`${apiUrl}/program/update/routine`, {
        program: updatedProgram,
        user: currUser,
      })
      .then((response) => {
        program = response.data;
        initializeForm();
        setIsToggled(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`fixed z-50 w-screen h-screen backdrop-blur-sm top-0 left-0 ${
        isToggled || "hidden"
      } py-24 px-4 flex justify-center items-center`}
    >
      <form
        id="workoutForm"
        className="w-full min-h-64 bg-gray-200 relative flex flex-col py-12 px-4 gap-4"
        onSubmit={(e) => submitHandler(e)}
      >
        <span
          className="font-bold absolute top-4 right-4"
          onClick={() => {
            setIsToggled(false);
            initializeForm();
          }}
        >
          X
        </span>
        <h3 className="font-bold text-2xl">Add Exercise</h3>
        <br />
        <div className="flex justify-between">
          <label htmlFor="name">Exercise Name: </label>
          <CustomDataList
            options={exercises.map((ex) => ex.Exercise_Name)}
            name="name"
            id="name"
            value={exerciseInfo.name}
            setValue={(value) =>
              setExerciseInfo((prev) => ({ ...prev, name: value }))
            }
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
              onChange={(e) => formHandler(e)}
              checked={exerciseInfo.load_type === "fixed_weight"}
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
              onChange={(e) => formHandler(e)}
              checked={exerciseInfo.load_type === "percent_onerm"}
              required
            />
            <label htmlFor="percent_onerm">% of 1RM</label>
          </div>
        </div>

        {exerciseInfo.load_type === "percent_onerm" && (
          <div className="flex justify-between">
            <label htmlFor="percentage">Load (% of 1RM):</label>
            <input
              id="percentage"
              name="percentage"
              type="number"
              min={1}
              max={100}
              step={1}
              onChange={(e) => formHandler(e)}
              value={exerciseInfo.percentage}
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
            onChange={(e) => formHandler(e)}
            value={exerciseInfo.num_sets}
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
              onChange={(e) => formHandler(e)}
              checked={exerciseInfo.rep_type === "to_failure"}
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
              onChange={(e) => formHandler(e)}
              checked={exerciseInfo.rep_type === "min_reps_to_failure"}
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
              onChange={(e) => formHandler(e)}
              checked={exerciseInfo.rep_type === "fixed_reps"}
              required
            />
            <label htmlFor="fixed_reps">Fixed Reps</label>
          </div>
        </div>

        {exerciseInfo.rep_type === "to_failure" ? (
          <div className="flex justify-between">
            <p># of Reps: </p>
            <span>999+</span>
          </div>
        ) : (
          <div className="flex justify-between">
            <label>
              {exerciseInfo.rep_type === "min_reps_to_failure" ? "Min" : "# of"}{" "}
              Reps:
            </label>
            <input
              type="number"
              step={1}
              min={1}
              max={1000}
              name="num_reps"
              onChange={(e) => formHandler(e)}
              value={exerciseInfo.num_reps}
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
