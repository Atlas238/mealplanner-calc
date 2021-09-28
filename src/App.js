import React, { useState } from "react";

import PhaseOne from "./components/PhaseOne";
import PhaseTwo from "./components/PhaseTwo";
import PhaseThree from "./components/PhaseThree";

import "./assets/sass/App.scss";

function App() {
  const [active, setActive] = useState(1);

  const [patient, setPatient] = useState({
    height: "5'8",
    heightFt: 0,
    heightIn: 0,
    weight: 100,
    age: 40,
    dob: {
      month: 0,
      day: 0,
      year: 0,
    },
    sex: "M",
    activity: 100,
    submitted: false,
  });

  return (
    <>
      <PhaseOne
        active={active}
        setActive={setActive}
        patient={patient}
        setPatient={setPatient}
      />
    </>
  );
}

export default App;
