import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import CreateProgram from "../components/CreateProgram";
import axios from "axios";
import { apiUrl } from "../data/apiUrl";

export default function Training() {
  const [programs, setPrograms] = useState({
    custom: [],
    premade: [],
  });
  const [createProgram, setCreateProgram] = useState(false);
  useEffect(() => {
    axios
      .get(`${apiUrl}/program/premade`)
      .then((response) => {
        const { data } = response;

        setPrograms((prev) => ({
          ...prev,
          premade: [...data],
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="w-full flex flex-col gap-16">
      <div>
        <h1 className="font-bold text-2xl">MY PROGRAMS</h1>
        {programs.custom.length === 0 ? (
          <p>Empty</p>
        ) : (
          <div>
            {programs.custom.map((pr, i) => (
              <div key={i}>{pr.name}</div>
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
              <div className="border-2 p-2" key={i}>
                <p className="font-bold">{program.title}</p>
                <p className="text-sm">{program.num_weeks} week(s)</p>
                <br />
                <p>{program.training_goal}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <CreateProgram
        isToggled={createProgram}
        setIsToggled={setCreateProgram}
      />
      <div className="fixed bottom-16 right-4">
        <FontAwesomeIcon
          size="3x"
          icon="fa-solid fa-circle-plus"
          onClick={() => setCreateProgram(true)}
        />
      </div>
    </div>
  );
}
