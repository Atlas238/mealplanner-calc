import React from 'react'

export default function TabControl({ tab, setTab }) {
    return (
        <div className='patientTabControl'>
            <p onClick={() => {
                setTab(!tab);
            }}
            >
                Edit Patient Details
            </p>
        </div>
    )
}
