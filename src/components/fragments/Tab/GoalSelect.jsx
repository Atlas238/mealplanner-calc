import React from 'react'

export default function GoalSelect({ goal, setGoal }) {
    return (
        <div className='goalSelect'>
          <ul className="patient-goal">
            <li
              className={goal === "lose" ? `goal-item active` : `goal-item`}
              onClick={() => setGoal("lose")}
            >
            Lose
            </li>
            <li
              className={goal === "maintain" ? `goal-item active` : `goal-item`}
              onClick={() => setGoal("maintain")}
            >
            Maintain
            </li>
            <li
              className={goal === "gain" ? `goal-item active` : `goal-item`}
              onClick={() => setGoal("gain")}
            >
            Gain
            </li>
          </ul>
        </div>
    )
}
