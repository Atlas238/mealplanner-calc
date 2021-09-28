import React, { useState, useEffect, useRef } from "react";
// Tab Parts
import TabControl from "./fragments/Tab/TabControl";
import TabContent from "./fragments/Tab/TabContent";

import GoalSelect from "./fragments/Tab/GoalSelect";

import PatientCal from "./fragments/PatientCal";
import PlanCardBox from "./fragments/PlanCardBox";
import PatientForm from "./fragments/Tab/PatientForm";
import ActivitySelect from "./fragments/Tab/ActivitySelect";
import DisorderedEating from "./DisorderedEating";
import PatientRmr from "./fragments/PatientRmr";

export default function PhaseOne({ patient, setPatient }) {
  // Top Bar Position Check (If we want it to float as you move down to the plans)
  const patientBar = useRef(null);
  // Tab control var if we want it to be a side bar with floating button control
  const [tab, setTab] = useState(false);

  const [goal, setGoal] = useState("maintain");
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="patientsection">
        <PatientForm patient={patient} setPatient={setPatient} />
        <div className="activitygoal">
          <PatientRmr patient={patient} />
          <ActivitySelect patient={patient} setPatient={setPatient} />
          <GoalSelect goal={goal} setGoal={setGoal} />
          <PatientCal patient={patient} />
        </div>
      </div>
      <PlanCardBox selected={selected} setSelected={setSelected} />
      <DisorderedEating />
    </>
  );
}
