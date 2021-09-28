import React from 'react'
import ActivitySelect from '../Tab/ActivitySelect'
import PatientCal from '../PatientCal'

import PatientForm from './PatientForm'

export default function TabContent({ tab, patient, setPatient }) {
    // {tab ? 'patientTab shown' : 'patientTab'}
    return (
        <div className={tab ? 'patientTab shown' : 'patientTab'}>
            <PatientForm patient={patient} setPatient={setPatient} />
            <hr />
            <PatientCal patient={patient} />
            <ActivitySelect patient={patient} setPatient={setPatient} />
        </div>
    )
}
