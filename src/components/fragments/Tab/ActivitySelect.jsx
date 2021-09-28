import React from 'react'

export default function ActivitySelect({ patient, setPatient  }) {
    return (
        <div className='activitygrp'>
            <h4>Daily Activity Level</h4>
          <div className="cardbox">
            <div
              className={
                patient.activity === 0
                  ? `activityCard selected`
                  : "activityCard"
              }
              onClick={() => setPatient({ ...patient, activity: 0 })}
            >
              <h6>None</h6>
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
              <h6>Minimal</h6>
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
              <h6>Mild</h6>
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
              <h6>Moderate</h6>
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
              <h6>Heavy</h6>
              <p value={1.7}>description</p>
            </div>
          </div>
        </div>
    )
}
