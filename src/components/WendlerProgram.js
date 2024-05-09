export default function WendlerProgram({ pr }) {
  const { squat, bench, deadlift } = pr || {
    squat: 0,
    bench: 0,
    deadlift: 0,
  };
  return (
    <div>
      <h1 className="font-bold">Week 1</h1>
      <table>
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

            <td>{squat * 0.65}lbs x 5</td>
            <td>{bench * 0.65}lbs x 5</td>
            <td>{deadlift * 0.65}lbs x 5</td>
          </tr>
          <tr>
            <td>Set 2 (75%)</td>

            <td>{squat * 0.75}lbs x 5</td>
            <td>{bench * 0.75}lbs x 5</td>
            <td>{deadlift * 0.75}lbs x 5</td>
          </tr>
          <tr>
            <td>Set 3 (85%)</td>

            <td>{squat * 0.85}lbs x 5+</td>
            <td>{bench * 0.85}lbs x 5+</td>
            <td>{deadlift * 0.85}lbs x 5+</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h1 className="font-bold">Week 2</h1>
      <table>
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

            <td>{squat * 0.7}lbs x 3</td>
            <td>{bench * 0.7}lbs x 3</td>
            <td>{deadlift * 0.7}lbs x 3</td>
          </tr>
          <tr>
            <td>Set 2 (80%)</td>

            <td>{squat * 0.8}lbs x 3</td>
            <td>{bench * 0.8}lbs x 3</td>
            <td>{deadlift * 0.8}lbs x 3</td>
          </tr>
          <tr>
            <td>Set 3 (90%)</td>

            <td>{squat * 0.9}lbs x 3+</td>
            <td>{bench * 0.9}lbs x 3+</td>
            <td>{deadlift * 0.9}lbs x 3+</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h1 className="font-bold">Week 3</h1>
      <table>
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

            <td>{squat * 0.75}lbs x 5</td>
            <td>{bench * 0.75}lbs x 5</td>
            <td>{deadlift * 0.75}lbs x 5</td>
          </tr>
          <tr>
            <td>Set 2 (85%)</td>

            <td>{squat * 0.85}lbs x 3</td>
            <td>{bench * 0.85}lbs x 3</td>
            <td>{deadlift * 0.85}lbs x 3</td>
          </tr>
          <tr>
            <td>Set 3 (95%)</td>

            <td>{squat * 0.95}lbs x 1+</td>
            <td>{bench * 0.95}lbs x 1+</td>
            <td>{deadlift * 0.95}lbs x 1+</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h1 className="font-bold">Week 4 (Deloading)</h1>
      <table>
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

            <td>{squat * 0.4}lbs x 5</td>
            <td>{bench * 0.4}lbs x 5</td>
            <td>{deadlift * 0.4}lbs x 5</td>
          </tr>
          <tr>
            <td>Set 2 (50%)</td>

            <td>{squat * 0.5}lbs x 5</td>
            <td>{bench * 0.5}lbs x 5</td>
            <td>{deadlift * 0.5}lbs x 5</td>
          </tr>
          <tr>
            <td>Set 3 (60%)</td>

            <td>{squat * 0.6}lbs x 5</td>
            <td>{bench * 0.6}lbs x 5</td>
            <td>{deadlift * 0.6}lbs x 5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
