import TrainingPr from "../components/TrainingPr.js";
import WendlerProgram from "../components/WendlerProgram.js";

export default function Program({ currPr }) {
  return (
    <div className="flex flex-col items-center">
      <br />
      <WendlerProgram currPr={currPr} />
    </div>
  );
}
