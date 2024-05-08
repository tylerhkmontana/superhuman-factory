import TrainingPr from "../components/TrainingPr.js";

export default function Home({ currPr, setCurrPr }) {
  return (
    <div className="w-96">
      <TrainingPr currPr={currPr} setCurrPr={setCurrPr} />
      <br />
      <h2 className="text-xl font-bold">Welcom all the weaklings!</h2>
      <br />
      <p>
        I made this website to make all of you stronger. I will continue to
        update the website by adding more features and strength programs.
      </p>
      <br />
      <p>
        All you gotta do is remain consistent, then you will get stronger
        eventually.
      </p>
    </div>
  );
}
