import TrainingPr from "./components/TrainingPr.js";
import WendlerProgram from "./components/WendlerProgram.js";
import { useState } from "react";

function App() {
  const [currPr, setCurrPr] = useState(localStorage.getItem(""));
  return (
    <div className="App">
      <main className="w-full flex flex-col items-center mt-8">
        <h1 className="text-4xl">Welcome To Superhuman Factory</h1>
        <br />
        <TrainingPr currPr={currPr} setCurrPr={setCurrPr} />
        <br />
        <WendlerProgram currPr={currPr} />
      </main>
      <br />
      <br />
    </div>
  );
}

export default App;
