import React, { useState } from "react";

export default function PatientForm() {
  const [patientDetails, setPatientDetails] = useState({
    height: 0,
    weight: 0,
    sex: "O",
    activity: 2,
  });

  const handleInput = (e) => {
    switch (e.target.name) {
      case "value":
        break;

      default:
        break;
    }
  };

  const submitPatientDetails = () => {};

  return (
    <div className="patientFormDiv">
      <h1>Enter Patient Information</h1>
      <form name="patientForm" className="patientForm">
        <label>
          Height:
          <input
            name="height"
            type="number"
            placeholder="height"
            onChange={handleInput}
          />
        </label>
        <input
          name="weight"
          type="number"
          placeholder="weight"
          onChange={handleInput}
        />
        <select
          name="sex"
          type="select"
          placeholder="sex"
          onChange={handleInput}
        >
          <option value="M">M</option>
          <option value="F">F</option>
          <option value="O">O</option>
        </select>
        {renderSlider()}
        <input
          name="activity"
          type="number"
          min={0}
          max={5}
          placeholder={0}
          onChange={handleInput}
        />
        <button name="submit" type="submit" onPress={submitPatientDetails}>
          Calculate Calorie Range
        </button>
      </form>
    </div>
  );
}
