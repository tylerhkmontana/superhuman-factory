import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import dateWithoutTimezone from '../utils/dateConverter';

export default function Login() {
  const { user, login, registeringUser, registerUser } = useAuth();
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    if (registeringUser) {
      const { given_name, family_name, email, sub } = registeringUser;
      setNewUser({
        sub,
        email,
        given_name,
        family_name,
      });
    }
  }, [registeringUser]);

  if (user) {
    return <Navigate to="/" replace />;
  }

  const responseMessage = (response) => {
    const token = response.credential;
    login(token);
  };

  const errorMessage = (error) => {
    console.log(error);
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

  const updateForm = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNewUser((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center p-6 pt-8 w-screen">
      <h1 className="text-4xl font-title">Superhuman Factory</h1>
      <br />
      <br />
      {registeringUser ? (
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
                <option value={'male'}>Male</option>
                <option value={'female'}>Female</option>
              </select>
            </div>
            <div className="flex justify-between">
              <label>Weight(lb): </label>
              <input
                type="number"
                name="weight"
                min={1}
                max={3000}
                step={'.1'}
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
                step={'0.1'}
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
                step={'0.1'}
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
                step={'0.1'}
                required
              />
            </div>
            <br />
            <button>Register</button>
          </form>
        </div>
      ) : (
        <>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <br />
          <br />
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </>
      )}
    </div>
  );
}
