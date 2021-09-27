import React, { useEffect, useState } from "react";

export default function PatientCal({ patient, goal }) {
  const [rmr, setRmr] = useState(0);
  useEffect(() => {
    let weightKg;
    let heightCm;
    let rmrvalue;
    weightKg = Math.floor(patient.weight * 0.45359237);
    heightCm = Math.floor((patient.heightFt * 12 + patient.heightIn) * 2.54);
    if (patient.sex === "M") {
      rmrvalue = 9.99 * weightKg + 6.25 * heightCm - 4.92 * patient.age + 5;
    } else if (patient.sex === "F") {
      rmrvalue = 9.99 * weightKg + 6.25 * heightCm - 4.92 * patient.age - 161;
    }
    rmrvalue = Math.floor(rmrvalue * patient.activity);
    setRmr(rmrvalue);
    switch (patient.activity) {
      case 0:
        // for loss... -250, for gain... +250
        if (goal === "lose") {
          let adjustedRmr = rmr - 250;
          setRmr(adjustedRmr);
        } else if (goal === "gain") {
          let adjustedRmr = rmr + 250;
          setRmr(adjustedRmr);
        }
        break;
      case 1.2:
        // for loss... -250, for gain... +250
        if (goal === "lose") {
          let adjustedRmr = rmr - 250;
          setRmr(adjustedRmr);
        } else if (goal === "gain") {
          let adjustedRmr = rmr + 250;
          setRmr(adjustedRmr);
        }
        break;
      case 1.3:
        // for loss... -500, for gain... +250
        if (goal === "lose") {
          let adjustedRmr = rmr - 500;
          setRmr(adjustedRmr);
        } else if (goal === "gain") {
          let adjustedRmr = rmr + 500;
          setRmr(adjustedRmr);
        }
        break;
      case 1.5:
        // for loss... -500, for gain... +250
        if (goal === "lose") {
          let adjustedRmr = rmr - 500;
          setRmr(adjustedRmr);
        } else if (goal === "gain") {
          let adjustedRmr = rmr + 500;
          setRmr(adjustedRmr);
        }
        break;
      case 1.7:
        // for loss... -500, for gain... +250
        if (goal === "lose") {
          let adjustedRmr = rmr - 500;
          setRmr(adjustedRmr);
        } else if (goal === "gain") {
          let adjustedRmr = rmr + 500;
          setRmr(adjustedRmr);
        }
        break;

      default:
        break;
    }
  }, [patient, goal]);
  return (
    <div className="patientrmr">
      <p>{rmr}</p>
    </div>
  );
}
