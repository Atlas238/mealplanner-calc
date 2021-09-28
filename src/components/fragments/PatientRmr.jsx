import React, { useState, useEffect } from 'react'

export default function PatientRmr({ patient }) {
    const [rmr, setRmr] = useState(undefined);

    useEffect(() => {
        let weightKg;
        let heightCm;
        let base;
        // Conversions...
        weightKg = Math.floor(patient.weight * 0.45359237);
        heightCm = Math.floor((patient.heightFt * 12 + patient.heightIn) * 2.54);
        // M/F Calc...
        if (patient.sex === 'M'){
            base = 9.99 * weightKg + 6.25 * heightCm - 4.92 * patient.age + 5;
        } else {
            base = 9.99 * weightKg + 6.25 * heightCm - 4.92 * patient.age - 161
        }
        // Adjust for activity level...
        if (patient.activity !== 0) {
            let val = Math.floor(base * patient.activity)
            setRmr(val);
        } else {
            let val = Math.floor(base);
            setRmr(val);
        }
    }, [patient])
    return (
        <div className='patientrmr'>
            <h4>Patient's Resting Metabolic Rate</h4>
            <p>{rmr}</p>
        </div>
    )
}
