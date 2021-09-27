import React, { useState } from "react";

import PlanCard from "./fragments/PlanCard";

export default function PhaseThree({ active, setActive, patient }) {
  const [selected, setSelected] = useState(null);

  const plans = [
    {
      id: 1,
      name: "Core",
      desc: "Description of Core",
    },
    {
      id: 2,
      name: "Core Vegan",
      desc: "Description of Vegan",
    },
    {
      id: 3,
      name: "Core Vegitarian",
      desc: "Description of Vegitarian",
    },
    {
      id: 4,
      name: "Mito",
      desc: "Description of Mito",
    },
  ];

  return (
    <section className={active === 3 ? "phase-three active" : "phase-three"}>
      <div className="plancard-box">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            plan={plan}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </section>
  );
}
