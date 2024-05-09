import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function TrainingPr() {
  const { user, updateUser } = useAuth();
  const { pr } = user;
  const [newPr, setNewPr] = useState({
    squat: 0,
    bench: 0,
    deadlift: 0,
  });

  function updatePr() {
    axios
      .put(process.env.REACT_APP_API_URL + "/user/updatePr", { user, newPr })
      .then((response) => {
        console.log(response);
        updateUser("pr", newPr);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <div>
        {pr ? (
          <div className="flex flex-col items-stretch">
            <div className="flex gap-4">
              <div>
                <h3 className="text-xl font-bold">Your PR</h3>
                <p className="flex justify-between gap-2">
                  Squat: <span>{pr.squat} lbs</span>
                </p>
                <p className="flex justify-between gap-2">
                  Bench: <span>{pr.bench} lbs</span>
                </p>
                <p className="flex justify-between gap-2">
                  Deadlift: <span>{pr.deadlift} lbs</span>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Training PR (90% of PR)</h3>
                <p className="flex justify-between gap-2">
                  Squat: <span>{pr.squat * 0.9} lbs</span>
                </p>
                <p className="flex justify-between gap-2">
                  Bench: <span>{pr.bench * 0.9} lbs</span>
                </p>
                <p className="flex justify-between gap-2">
                  Deadlift: <span>{pr.deadlift * 0.9} lbs</span>
                </p>
              </div>
            </div>
            <br />
            <button>Update</button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Please update your PR (lbs)</h2>
            <div className="flex justify-between gap-4">
              <label>Squat (lb):</label>
              <input
                type="number"
                value={newPr.squat}
                name="squat"
                onChange={(e) =>
                  setNewPr((prev) => ({ ...prev, squat: e.target.value }))
                }
              />
            </div>
            <div className="flex justify-between gap-4">
              <label>Bench (lb):</label>
              <input
                type="number"
                value={newPr.bench}
                name="bench"
                onChange={(e) =>
                  setNewPr((prev) => ({ ...prev, bench: e.target.value }))
                }
              />
            </div>
            <div className="flex justify-between gap-4">
              <label>Deadlift (lb):</label>
              <input
                type="number"
                value={newPr.deadlift}
                name="deadlift"
                onChange={(e) =>
                  setNewPr((prev) => ({ ...prev, deadlift: e.target.value }))
                }
              />
            </div>
            <button onClick={updatePr}>Update</button>
          </div>
        )}
      </div>
    </div>
  );
}
