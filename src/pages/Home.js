import TrainingPr from "../components/TrainingPr.js";
import { useAuth } from "../context/AuthContext.js";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="w-96">
      <p>Welcome {user.given_name}</p>
      <TrainingPr user={user} />
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
