import React, { useState, useEffect } from "react";

import { validHeight } from "../utils/Regex";

export default function PhaseOne({ active, setActive, patient, setPatient }) {
  const [warn, setWarn] = useState({
    show: false,
    content: "",
  });
  // Input Patient Details, Read About Activity Level
  const handleChange = (e) => {
    switch (e.target.name) {
      case "height":
        setPatient({
          ...patient,
          height: e.target.value,
        });
        break;

      case "weight":
        setPatient({
          ...patient,
          weight: e.target.value,
        });
        break;
      case "age":
        setPatient({
          ...patient,
          age: e.target.value,
        });
        break;
      case "sex":
        setPatient({
          ...patient,
          sex: e.target.value,
        });
        break;

      default:
        break;
    }
  };
  const handleSubmit = () => {
    console.log(patient);
    // Assuming you might have entered a ' character
    if (validHeight.test(patient.height)) {
      console.log("Height String matched Regex");
      let heightstr = patient.height.split("'").map((item) => parseInt(item));
      setPatient({
        ...patient,
        heightFt: heightstr[0],
        heightIn: heightstr[1],
      });
    } else if (patient.height.length === 3) {
      console.log("didnt match regex, hoping its three characters long...");
      let heightstr = patient.height.split("").map((item) => parseInt(item));
      // invalid inches
      if (heightstr[2] > 12) {
        setWarn({
          show: true,
          content:
            "Looks like you entered an invalid height, check that field and try again. (Accepts both 5'11 or 511 syntax)",
        });
        return;
      }
      setPatient({
        ...patient,
        heightFt: heightstr[0],
        heightIn: heightstr[2],
      });
      console.log("Valid Patient Details from form, Setting Patient Obj");
      console.log(patient);
      console.log("Onwards!");
      setActive(2);
    } else {
      console.log("it wasnt three characters long... try again i guess?");
      setWarn({
        show: true,
        content:
          "Whoops, check the height you entered and try again (Accepts 5'11 or 511, etc.)",
      });
    }
  };

  return (
    <section className={active === 1 ? "phase-one active" : "phase-one"}>
      <div className={warn.show ? `submit-warning show` : `submit-warning`}>
        <div>
          <p>{warn.content}</p>
          <button
            name="closewarning"
            onClick={() =>
              setWarn({
                ...warn,
                show: false,
              })
            }
          >
            Try Again
          </button>
        </div>
      </div>

      <h1>Welcome!</h1>
      <p>Please provide your Patient's details.</p>

      <div className="mainForm">
        <div className="heightgrp">
          <label>
            Height
            <input
              type="text"
              name="height"
              onChange={handleChange}
              value={patient.height}
            />
          </label>
        </div>
        <div className="weightgrp">
          <label>
            Weight
            <input
              type="number"
              name="weight"
              value={patient.weight}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="agegrp">
          <label>
            Age
            <input
              type="number"
              name="age"
              value={patient.age}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="sexgrp">
          <label>
            Sex
            <select name="sex" value={patient.sex} onChange={handleChange}>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </label>
        </div>
      </div>

      <div className="activitygrp">
        <h4>Activity Level</h4>
        <div className="cardbox">
          <div
            className={
              patient.activity === 0 ? `activityCard selected` : "activityCard"
            }
            onClick={() => setPatient({ ...patient, activity: 0 })}
          >
            <h6>No Minimal Activity</h6>
            <p>description</p>
          </div>
          <div
            className={
              patient.activity === 1.2
                ? `activityCard selected`
                : "activityCard"
            }
            onClick={() => setPatient({ ...patient, activity: 1.2 })}
          >
            <h6>Minimal Daily Activity</h6>
            <p value={1.2}>description</p>
          </div>
          <div
            className={
              patient.activity === 1.3
                ? `activityCard selected`
                : "activityCard"
            }
            onClick={() => setPatient({ ...patient, activity: 1.3 })}
          >
            <h6>Mild Daily Activity</h6>
            <p value={1.3}>description</p>
          </div>
          <div
            className={
              patient.activity === 1.5
                ? `activityCard selected`
                : "activityCard"
            }
            onClick={() => setPatient({ ...patient, activity: 1.5 })}
          >
            <h6>Moderate Daily Activity</h6>
            <p value={1.5}>description</p>
          </div>
          <div
            className={
              patient.activity === 1.7
                ? `activityCard selected`
                : "activityCard"
            }
            onClick={() => setPatient({ ...patient, activity: 1.7 })}
          >
            <h6>Heavy Exercise</h6>
            <p value={1.7}>description</p>
          </div>
        </div>
      </div>

      <div>
        <button type="button" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </section>
  );
}
