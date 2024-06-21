import exercises from "../data/exercises.json";

export default function CreateProgram({ isToggled, setIsToggled }) {
  console.log(exercises);
  return (
    <div
      className={`fixed z-50 w-screen h-screen backdrop-blur-sm top-0 left-0 ${
        isToggled || "hidden"
      } py-24 px-4 flex justify-center items-center`}
    >
      <form className="w-full bg-gray-200 relative flex flex-col py-12 px-4 gap-4">
        <span
          className="font-bold absolute top-4 right-4"
          onClick={() => setIsToggled(false)}
        >
          X
        </span>
        <div className="h-12 overflow-y-auto">
          <label htmlFor="exercises">Workout: </label>
          <input list="exercises" />
          <datalist
            id="exercises"
            className="absolute overflow-y-auto max-h-12"
          >
            {exercises.map((ex, i) => (
              <option value={ex.Exercise_Name}>{ex.Exercise_Name}</option>
            ))}
            <option>Other</option>
          </datalist>
        </div>

        <div>
          <label>Load Type: </label>
          <select>
            <option>Fixed</option>
            <option>P</option>
            <option></option>
          </select>
        </div>
      </form>
    </div>
  );
}
