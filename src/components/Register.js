import { useAuth } from "../context/AuthContext";
import dateWithoutTimezone from "../utils/dateConverter";

export default function Register({ newUser, setNewUser }) {
  const { registerUser, registeringUser } = useAuth();

  const updateForm = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNewUser((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const register = (e) => {
    e.preventDefault();
    let {
      given_name,
      family_name,
      email,
      squat,
      bench,
      deadlift,
      dob,
      gender,
      weight,
      sub,
    } = newUser;

    let rightNow = new Date();
    rightNow = rightNow.toISOString();

    const user = {
      sub,
      email,
      given_name,
      family_name,
      gender,
      dob: dateWithoutTimezone(new Date(dob)),
      weight,
      pr: {
        squat,
        bench,
        deadlift,
      },
      joined: rightNow,
      updated: rightNow,
    };

    registerUser(user);
  };
  return (
    <div className="w-full">
      <h2 className="font-bold text-xl">First Time? Register Now!</h2>
      <br />

      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => register(e)}
        onChange={(e) => updateForm(e)}
      >
        <h3 className="font-bold text-lg">Personal Info</h3>
        <div className="flex justify-between">
          <label>First Name: </label>
          <input
            defaultValue={registeringUser.given_name}
            name="given_name"
            required
          />
        </div>
        <div className="flex justify-between">
          <label>Last Name: </label>
          <input
            defaultValue={registeringUser.family_name}
            name="family_name"
            required
          />
        </div>
        <div className="flex justify-between">
          <label>Gender: </label>
          <select className="border" name="gender" required>
            <option value="">--Select--</option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </select>
        </div>
        <div className="flex justify-between">
          <label>Weight(lb): </label>
          <input
            type="number"
            name="weight"
            min={1}
            max={3000}
            step={".1"}
            required
          />
        </div>
        <div className="flex justify-between">
          <label>DOB: </label>
          <input type="date" name="dob" required />
        </div>
        <br />
        <h3 className="font-bold text-lg">Current PR</h3>
        <div className="flex justify-between">
          <label>Squat(lb): </label>
          <input
            type="number"
            name="squat"
            min={1}
            max={3000}
            step={"0.1"}
            required
          />
        </div>
        <div className="flex justify-between">
          <label>Bench(lb): </label>
          <input
            type="number"
            name="bench"
            min={1}
            max={3000}
            step={"0.1"}
            required
          />
        </div>
        <div className="flex justify-between">
          <label>Deadlift(lb): </label>
          <input
            type="number"
            name="deadlift"
            min={1}
            max={3000}
            step={"0.1"}
            required
          />
        </div>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
