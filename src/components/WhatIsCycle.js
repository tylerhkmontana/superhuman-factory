import { useState } from "react";

export default function WhatIsCycle() {
  const [aboutCycle, setAboutCycle] = useState(false);

  return (
    <div>
      <span onClick={() => setAboutCycle((prev) => !prev)}>
        What is a cycle? {aboutCycle ? <strong>-</strong> : <strong>+</strong>}
      </span>
      <div
        className={`w-full ${
          aboutCycle || "h-0 scale-y-0"
        } transition-[0.5s] origin-top`}
      >
        <table>
          <tbody>
            <tr>
              <td>Macrocycle</td>
              <td>
                <ul className="list-disc px-4 text-start">
                  <li>Longest timeframe in a training plan</li>
                  <li>To achieve long-term goals</li>
                  <li>
                    Consists of multiple mesocycles(blocks) which outline phases
                    (e.g.,preparation, competition, transition)
                  </li>
                  <li>&#8804; 1 year</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Mesocycle</td>
              <td>
                <ul className="list-disc px-4 text-start">
                  <li>A block of training within the macrocycle</li>
                  <li>
                    Focuses on specific training objectives or phases, such as
                    building endurance, strength, or speed
                  </li>
                  <li>4 - 8 weeks</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Microcycle</td>
              <td>
                <ul className="list-disc px-4 text-start">
                  <li>
                    A shorter, repeated unit of training within the mesoocycle
                  </li>
                  <li>
                    Focuses on shor-term goals and the specifics of daily
                    workouts
                  </li>
                  <li>1 week</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Session</td>
              <td>
                <ul className="list-disc px-4 text-center">
                  <li>
                    A single training workout or activity within the microcycle
                  </li>
                  <li>
                    the most detailed level of the training plan, specifying the
                    exact exercises, intensities, durations, and recoveries
                  </li>
                  <li>30 min - a couple of hours</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
