import React, { useState } from "react";

import PatientCal from "./fragments/PatientCal";
import PlanCard from "./fragments/PlanCard";

export default function PhaseTwo({ active, setActive, patient }) {
  const [goal, setGoal] = useState("maintain");
  const [selected, setSelected] = useState(null);

  return (
    <section id="2" className={"phase-two active"}>
      <h4>Patient's Resting Metabolic Rate</h4>
      <PatientCal patient={patient} goal={goal} />

      <ul className="patient-goal">
        <li
          className={goal === "lose" ? `goal-item active` : `goal-item`}
          onClick={() => setGoal("lose")}
        >
          Lose
        </li>
        <li
          className={goal === "maintain" ? `goal-item active` : `goal-item`}
          onClick={() => setGoal("maintain")}
        >
          Maintain
        </li>
        <li
          className={goal === "gain" ? `goal-item active` : `goal-item`}
          onClick={() => setGoal("gain")}
        >
          Gain
        </li>
      </ul>
      <hr style={{ width: "75%", margin: "2% auto 0 auto" }} />
      <div className="plancard-box">{/* Render plans... */}</div>

      <button onClick={() => setActive(3)}>Next</button>
    </section>
  );
}
