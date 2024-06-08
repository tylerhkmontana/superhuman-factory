import { useState } from "react";
import WhatIsCycle from "./WhatIsCycle";

export default function CreateProgram({ isToggled, setIsToggled }) {
  const [program, setProgram] = useState({
    title: null,
    num_weeks: 1,
    training_goal: "",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setProgram((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(program);
  };

  return (
    <div
      className={`fixed z-50 w-screen h-screen backdrop-blur-sm top-0 left-0 ${
        isToggled || "hidden"
      } py-24 px-4 flex justify-center items-center`}
    >
      <form
        className="w-full h-full bg-gray-200 relative flex flex-col justify-between py-12 px-4 gap-4"
        onChange={(e) => formHandler(e)}
        onSubmit={(e) => submitHandler(e)}
      >
        <span
          className="font-bold absolute top-4 right-4"
          onClick={() => setIsToggled(false)}
        >
          X
        </span>

        <h3 className="font-bold text-2xl">Let's create your custom program</h3>

        <div className="flex flex-col gap-6 overflow-auto">
          <div className="flex flex-col gap-2">
            <h4>What is the name of your program</h4>
            <input
              className="w-auto"
              name="title"
              placeholder="ex) 5/3/1 Strength"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <h4>How many weeks are in your program (max: 12)?</h4>
            <input
              className="w-auto"
              name="num_weeks"
              placeholder="# of weeks"
              type="number"
              min={1}
              max={12}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <h4>What is the goal of your program?</h4>
            <textarea
              className="p-4"
              placeholder='"Significiant improvement in strength, and a little bit of hypertrophy"'
              name="training_goal"
            />
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
