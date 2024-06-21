import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import CreateProgram from "../components/CreateProgram";
import axios from "axios";
import { apiUrl } from "../data/apiUrl";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Training() {
  const { user } = useAuth();
  const [programs, setPrograms] = useState({
    custom: [],
    premade: [],
  });
  const [createProgram, setCreateProgram] = useState(false);
  useEffect(() => {
    axios
      .get(`${apiUrl}/program?authorid=${user.sub}`)
      .then((response) => {
        const { data } = response;
        const { custom, premade } = data;

        setPrograms({
          custom,
          premade,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full flex flex-col gap-16 pb-16">
      <div>
        <h1 className="font-bold text-2xl">MY PROGRAMS</h1>
        {programs.custom.length === 0 ? (
          <p>Empty</p>
        ) : (
          <div className="flex flex-col gap-2 mt-8">
            {programs.custom.map((program, i) => (
              <Link key={i} to={`/program/custom/${program.id}`}>
                <div className="border-2 p-2 relative">
                  <p className="font-bold">{program.title}</p>
                  <p className="text-sm">{program.num_weeks} week(s)</p>
                  <br />
                  <p>{program.training_goal}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div>
        <h1 className="font-bold text-2xl">PREMADE PROGRAMS</h1>
        {programs.premade.length === 0 ? (
          <p>Empty</p>
        ) : (
          <div className="flex flex-col gap-2 mt-8">
            {programs.premade.map((program, i) => (
              <Link key={i} to={`/program/premade/${program.id}`}>
                <div className="border-2 p-2">
                  <p className="font-bold">{program.title}</p>
                  <p className="text-sm">{program.num_weeks} week(s)</p>
                  <br />
                  <p>{program.training_goal}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <CreateProgram
        isToggled={createProgram}
        setIsToggled={setCreateProgram}
        setPrograms={setPrograms}
      />
      <div className="fixed bottom-16 right-4">
        <FontAwesomeIcon
          size="3x"
          icon="fa-solid fa-circle-plus"
          onClick={() =>
            programs.custom.length >= 3
              ? window.alert("You cannot create more than 3 custom programs.")
              : setCreateProgram(true)
          }
        />
      </div>
    </div>
  );
}
