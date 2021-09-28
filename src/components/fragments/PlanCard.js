import React from "react";

export default function PlanCard({ plan, selected, setSelected }) {
  return (
    <div
      className={selected === plan.id ? `plancard selected` : `plancard`}
      onClick={() => setSelected(plan.id)}
    >
      <h4>{plan.name}</h4>
      <p>{plan.desc}</p>
      <div>{plan.dist}</div>
    </div>
  );
}
