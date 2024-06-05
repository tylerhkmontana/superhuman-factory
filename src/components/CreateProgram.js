import { useState } from "react";
import WhatIsCycle from "./WhatIsCycle";

export default function CreateProgram({ isToggled, setIsToggled }) {
  const [step, setStep] = useState(1);
  const [program, setProgram] = useState({
    name: null,
    cycle_type: null,
    num_weeks: 1,
    weeks: [],
  });
  const finalStep = 5;

  const nextStep = (e) => {
    e.preventDefault();
    if (step < finalStep) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setProgram((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const eachStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>What is the name of your program?</h2>
            <input
              name="name"
              placeholder="ex) 5/3/1 Strength"
              value={program.name}
              required
            />
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-center">
              What type of cycle does your program follow?
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  id="mesocycle"
                  type="radio"
                  name="cycle_type"
                  value="mesocycle"
                  required
                />
                <label htmlFor="mesocycle">Mesocycle (multi-week)</label>
              </div>
              {program.cycle_type === "mesocycle" && (
                <input
                  className="w-auto"
                  name="num_weeks"
                  placeholder="# of weeks"
                  type="number"
                  min={1}
                  max={12}
                  required
                />
              )}
            </div>

            <div className="flex gap-2">
              <input
                id="microcycle"
                type="radio"
                name="cycle_type"
                value="microcycle"
                required
              />
              <label htmlFor="microcycle">Microcycle (single week)</label>
            </div>
            <WhatIsCycle />
          </>
        );
      case 3:
        return (
          <div>
            <h2>Step 3</h2>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4</h2>
          </div>
        );
      case 5:
        return (
          <div>
            <h2>Step 5</h2>
          </div>
        );
    }
  };
  return (
    <div
      className={`fixed z-50 w-screen h-screen bg-gray-200 top-0 left-0 ${
        isToggled || "hidden"
      } py-12 px-8`}
    >
      <button onClick={() => console.log(program)}>check program</button>
      <h1 className="text-2xl font-bold absolute top-16 left-0 w-full text-center">
        Let's build your program
      </h1>
      <span
        className="font-bold absolute top-4 left-4"
        onClick={() => setIsToggled(false)}
      >
        X
      </span>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <form
          className="flex gap-8 flex-col items-center w-full"
          onChange={(e) => formHandler(e)}
          onSubmit={(e) => nextStep(e)}
        >
          {eachStep()}
          <div className="flex justify-between w-full">
            {step === 1 ? <span></span> : <p onClick={prevStep}>&larr;back</p>}
            {step === finalStep ? (
              <button>create</button>
            ) : (
              <button>next</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
