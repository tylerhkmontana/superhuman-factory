export default function WendlerProgram({ pr }) {
  let { squat, bench, deadlift } = pr || {
    squat: 0,
    bench: 0,
    deadlift: 0,
  };

  let [trainingSquat, trainingBench, trainingDeadlift] = [
    squat * 0.9,
    bench * 0.9,
    deadlift * 0.9,
  ];

  return (
    <div>
      <h1 className="font-bold text-4xl">Wendler's 5/3/1</h1>
      <br />
      <div className="text-sm sm:text-base">
        <h2>Training PR (90% of PR)</h2>
        <p>
          Sqaut: {squat}lb * 0.9 = {squat * 0.9}lb
        </p>
        <p>
          Bench: {bench}lb * 0.9 = {bench * 0.9}lb
        </p>
        <p>
          Deadlift: {deadlift}lb * 0.9 = {deadlift * 0.9}lb
        </p>
      </div>
      <br />
      <h2 className="font-bold">Week 1</h2>
      <table className="text-xs sm:text-base">
        <thead>
          <tr>
            <td></td>
            <td>Squat</td>
            <td>Bench</td>
            <td>Deadlift</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Set 1 (65%)</td>

            <td>{Math.floor(trainingSquat * 0.65)}lbs x 5</td>
            <td>{Math.floor(trainingBench * 0.65)}lbs x 5</td>
            <td>{Math.floor(trainingDeadlift * 0.65)}lbs x 5</td>
          </tr>
          <tr>
            <td>Set 2 (75%)</td>

            <td>{Math.floor(trainingSquat * 0.75)}lbs x 5</td>
            <td>{Math.floor(trainingBench * 0.75)}lbs x 5</td>
            <td>{Math.floor(trainingDeadlift * 0.75)}lbs x 5</td>
          </tr>
          <tr>
            <td>Set 3 (85%)</td>

            <td>{Math.floor(trainingSquat * 0.85)}lbs x 5+</td>
            <td>{Math.floor(trainingBench * 0.85)}lbs x 5+</td>
            <td>{Math.floor(trainingDeadlift * 0.85)}lbs x 5+</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h2 className="font-bold">Week 2</h2>
      <table className="text-xs sm:text-base">
        <thead>
          <tr>
            <td></td>
            <td>Squat</td>
            <td>Bench</td>
            <td>Deadlift</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Set 1 (70%)</td>

            <td>{Math.floor(trainingSquat * 0.7)}lbs x 3</td>
            <td>{Math.floor(trainingBench * 0.7)}lbs x 3</td>
            <td>{Math.floor(trainingDeadlift * 0.7)}lbs x 3</td>
          </tr>
          <tr>
            <td>Set 2 (80%)</td>

            <td>{Math.floor(trainingSquat * 0.8)}lbs x 3</td>
            <td>{Math.floor(trainingBench * 0.8)}lbs x 3</td>
            <td>{Math.floor(trainingDeadlift * 0.8)}lbs x 3</td>
          </tr>
          <tr>
            <td>Set 3 (90%)</td>

            <td>{Math.floor(trainingSquat * 0.9)}lbs x 3+</td>
            <td>{Math.floor(trainingBench * 0.9)}lbs x 3+</td>
            <td>{Math.floor(trainingDeadlift * 0.9)}lbs x 3+</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h2 className="font-bold">Week 3</h2>
      <table className="text-xs sm:text-base">
        <thead>
          <tr>
            <td></td>
            <td>Squat</td>
            <td>Bench</td>
            <td>Deadlift</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Set 1 (75%)</td>

            <td>{Math.floor(trainingSquat * 0.75)}lbs x 5</td>
            <td>{Math.floor(trainingBench * 0.75)}lbs x 5</td>
            <td>{Math.floor(trainingDeadlift * 0.75)}lbs x 5</td>
          </tr>
          <tr>
            <td>Set 2 (85%)</td>

            <td>{Math.floor(trainingSquat * 0.85)}lbs x 3</td>
            <td>{Math.floor(trainingBench * 0.85)}lbs x 3</td>
            <td>{Math.floor(trainingDeadlift * 0.85)}lbs x 3</td>
          </tr>
          <tr>
            <td>Set 3 (95%)</td>

            <td>{Math.floor(trainingSquat * 0.95)}lbs x 1+</td>
            <td>{Math.floor(trainingBench * 0.95)}lbs x 1+</td>
            <td>{Math.floor(trainingDeadlift * 0.95)}lbs x 1+</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h2 className="font-bold">Week 4 (Deloading)</h2>
      <table className="text-xs sm:text-base">
        <thead>
          <tr>
            <td></td>
            <td>Squat</td>
            <td>Bench</td>
            <td>Deadlift</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Set 1 (40%)</td>

            <td>{Math.floor(trainingSquat * 0.4)}lbs x 5</td>
            <td>{Math.floor(trainingBench * 0.4)}lbs x 5</td>
            <td>{Math.floor(trainingDeadlift * 0.4)}lbs x 5</td>
          </tr>
          <tr>
            <td>Set 2 (50%)</td>

            <td>{Math.floor(trainingSquat * 0.5)}lbs x 5</td>
            <td>{Math.floor(trainingBench * 0.5)}lbs x 5</td>
            <td>{Math.floor(trainingDeadlift * 0.5)}lbs x 5</td>
          </tr>
          <tr>
            <td>Set 3 (60%)</td>

            <td>{Math.floor(trainingSquat * 0.6)}lbs x 5</td>
            <td>{Math.floor(trainingBench * 0.6)}lbs x 5</td>
            <td>{Math.floor(trainingDeadlift * 0.6)}lbs x 5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
