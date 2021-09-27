import React from "react";

export default function PlanCard({ plan, selected, setSelected }) {
  return (
    <div
      className={selected === plan.id ? `plancard selected` : `plancard`}
      onClick={() => setSelected(plan.id)}
    >
      {/* Add SVG Border after sizing, etc. */}
      <h4>{plan.name}</h4>
      <p>{plan.desc}</p>
      <div>
        <button>Download Plan</button>
      </div>
    </div>
  );
}
