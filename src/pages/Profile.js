import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  const { user, logout, updateUser } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newProfile, setNewProfile] = useState({});

  useEffect(() => {
    setNewProfile({ ...user });
  }, [user]);

  const updateForm = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    if (key === "squat" || key === "deadlift" || key === "bench") {
      setNewProfile((prev) => ({
        ...prev,
        pr: {
          ...prev.pr,
          [key]: value,
        },
      }));
    } else {
      setNewProfile((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  const confirmUpdate = () => {
    const updatedWhen = Date.now() - new Date(user.updated).getTime();
    const twentyFourHours = 8.64e7;
    if (updatedWhen > twentyFourHours) {
      setIsUpdating(true);
    } else {
      const whenAvailable = new Date(
        Date.now() + twentyFourHours - updatedWhen
      );
      window.confirm(
        `You will be able to update your profile at ${whenAvailable}`
      );
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    let profile;

    try {
      profile = await updateUser(newProfile);
    } catch (error) {
      console.log(error);
      profile = user;
    }

    setIsUpdating(false);
    // Reset form values
    const inputGroups = e.target.elements;

    Object.keys(profile).forEach((key) => {
      if (key === "pr") {
        Object.keys(profile.pr).forEach(
          (k) => (inputGroups[k].value = profile.pr[k])
        );
      } else if (key === "dob") {
        inputGroups[key].value = profile[key].split("T")[0];
      } else if (Object.keys(inputGroups).includes(key)) {
        inputGroups[key].value = profile[key];
      }
    });
  };

  return (
    <div className="w-full">
      <p className="text-red-600 w-full text-center">
        *You can update your profile only once a day*
      </p>
      <br />
      <div className="w-full flex justify-between items-center">
        <h2 className="text-2xl font-bold">Profile</h2>
        <span>
          {isUpdating ? (
            <span
              className="cursor-pointer font-bold"
              onClick={() => setIsUpdating(false)}
            >
              X
            </span>
          ) : (
            <FontAwesomeIcon
              className="cursor-pointer"
              icon="fa-solid fa-pen"
              onClick={() => setIsUpdating(true)}
            />
          )}
        </span>
      </div>
      <br />
      <form
        className="flex flex-col gap-2"
        onChange={(e) => updateForm(e)}
        onSubmit={(e) => updateProfile(e)}
      >
        <h3 className="font-bold text-lg">Personal Info</h3>
        <div className="flex justify-between">
          <label>First Name: </label>
          <input
            defaultValue={user.given_name}
            name="given_name"
            disabled={!isUpdating}
            required
          />
        </div>
        <div className="flex justify-between">
          <label>Last Name: </label>
          <input
            defaultValue={user.family_name}
            name="family_name"
            disabled={!isUpdating}
            required
          />
        </div>
        <div className="flex justify-between">
          <label>Gender: </label>
          <select
            className="border"
            name="gender"
            defaultValue={user.gender}
            disabled={!isUpdating}
            required
          >
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
            defaultValue={user.weight}
            disabled={!isUpdating}
            required
          />
        </div>
        <div className="flex justify-between">
          <label>DOB: </label>
          <input
            type="date"
            name="dob"
            defaultValue={user.dob.split("T")[0]}
            disabled={!isUpdating}
            required
          />
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
            defaultValue={user.pr.squat}
            disabled={!isUpdating}
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
            defaultValue={user.pr.bench}
            disabled={!isUpdating}
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
            defaultValue={user.pr.deadlift}
            disabled={!isUpdating}
            required
          />
        </div>
        <br />
        {isUpdating ? (
          <button>Update</button>
        ) : (
          <button className="bg-red-800 text-white w-full" onClick={logout}>
            Sign Out
          </button>
        )}
      </form>
      <br />
    </div>
  );
}
