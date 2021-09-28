import React, { useEffect, useState } from "react";

export default function PatientCal({ rmr, goal }) {
  const [dailyCal, setDailyCal] = useState(undefined);

  useEffect(() => {}, []);
  return (
    <div className="patientDailyCal">
      <h4>Patient's Recommended Calories/Day:</h4>
      <p>{dailyCal}</p>
    </div>
  );
}
