import "./TrainingPr.css";

export default function TrainingPr({ currPr, setCurrPr }) {
  function updateCurrPr(e) {
    e.preventDefault();

    const [squat, bench, deadlift, overheadPress] = e.target;
    let pr = {
      squat: parseInt(squat.value),
      bench: parseInt(bench.value),
      deadlift: parseInt(deadlift.value),
      overheadPress: parseInt(overheadPress.value),
    };

    localStorage.setItem("currPr", JSON.stringify(pr));
    setCurrPr(pr);
  }

  function resetCurrPr() {
    localStorage.removeItem("currPr");
    setCurrPr(null);
  }
  return (
    <div>
      <div>
        {currPr ? (
          <div className="flex flex-col items-stretch">
            <div className="flex gap-4">
              <div>
                <h3 className="text-xl font-bold">Your PR</h3>
                <p className="flex justify-between gap-2">
                  Squat: <span>{currPr.squat} lbs</span>
                </p>
                <p className="flex justify-between gap-2">
                  Bench: <span>{currPr.bench} lbs</span>
                </p>
                <p className="flex justify-between gap-2">
                  Deadlift: <span>{currPr.deadlift} lbs</span>
                </p>
                <p className="flex justify-between gap-2">
                  Over Head Press: <span>{currPr.overheadPress} lbs</span>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Training PR (90% of PR)</h3>
                <p className="flex justify-between gap-2">
                  Squat: <span>{currPr.squat * 0.9} lbs</span>
                </p>
                <p className="flex justify-between gap-2">
                  Bench: <span>{currPr.bench * 0.9} lbs</span>
                </p>
                <p className="flex justify-between gap-2">
                  Deadlift: <span>{currPr.deadlift * 0.9} lbs</span>
                </p>
                <p className="flex justify-between gap-2">
                  Over Head Press: <span>{currPr.overheadPress * 0.9} lbs</span>
                </p>
              </div>
            </div>
            <br />
            <button onClick={resetCurrPr}>Reset</button>
          </div>
        ) : (
          <form className="flex flex-col gap-2" onSubmit={updateCurrPr}>
            <h2 className="font-bold">Please update your PR (lbs)</h2>
            <div className="flex justify-between gap-4">
              <label>Squat (lb):</label>
              <input type="number" defaultValue={0} name="squat" />
            </div>
            <div className="flex justify-between gap-4">
              <label>Bench (lb):</label>
              <input type="number" defaultValue={0} name="bench" />
            </div>
            <div className="flex justify-between gap-4">
              <label>Deadlift (lb):</label>
              <input type="number" defaultValue={0} name="deadlift" />
            </div>
            <div className="flex justify-between gap-4">
              <label>Over Head Press (lb):</label>
              <input type="number" defaultValue={0} name="overheadPress" />
            </div>
            <button>Update</button>
          </form>
        )}
      </div>
    </div>
  );
}
