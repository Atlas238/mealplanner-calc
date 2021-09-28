import React from 'react'

import PlanCard from './PlanCard'

export default function PlanCardBox({ selected, setSelected }) {
    return (
        <div className='plancard-box'>
            <h6>First Step Interventions</h6>
        <hr />
        <div className='first'>
         <PlanCard
          plan={{
            id: 1,
            name: "CORE",
            desc: "",
            tier: "firstStep",
            dist: "25P/30F/45C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        <PlanCard
          plan={{
            id: 2,
            name: "CORE",
            desc: "V/VE",
            tier: "firstStep",
            dist: "25P/30F/45C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        <PlanCard
          plan={{
            id: 3,
            name: "CORE",
            desc: "V/VE without Soy",
            tier: "firstStep",
            dist: "20P/30F/50C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        <PlanCard
          plan={{
            id: 4,
            name: "CARDIOMETABOLIC",
            desc: "",
            tier: "firstStep",
            dist: "30P/30F/40C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        <PlanCard
          plan={{
            id: 5,
            name: "ELIMINATION/REINTRODUCTION",
            desc: "",
            tier: "firstStep",
            dist: "30P/30F/40C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        <PlanCard
          plan={{
            id: 6,
            name: "DETOX",
            desc: "",
            tier: "firstStep",
            dist: "30P/30F/40C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        </div>
        <h6>Advanced Therapeutic Interventions</h6>
        <hr />
        <div className='advanced'>
        <PlanCard
          plan={{
            id: 7,
            name: "MITO",
            desc: "Reduced carbohydrates with ketogenic option; Reduces inflammation, focus on phytonutrients and high-quality-fats to support antioxidant potential & energy production, vitality and healthy ageing; Appropriate for those dealing with cronic pain, fatigue, and neurologic conditions. Options for dairy free, low-grain and gluten-free.",
            tier: "advanced",
            dist: "20P/60F/20C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        <PlanCard
          plan={{
            id: 8,
            name: "INTERMITTANT FASTING",
            desc: "",
            tier: "advanced",
            dist: "32P/55F/13C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        <PlanCard
          plan={{
            id: 9,
            name: "RENEW",
            desc: "Dairy, sugar, grain, & gluten free; Reduces inflammation, food cravings and attatchemnts; Promotes healthy detoxification of toxins; Identifies and reduces food triggers; Appropriate for those whit autoimmune, gastrointestinal, neurological, and other chronic health conditions.",
            tier: "advanced",
            dist: "30P/45F/25C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        </div>
        <h6>GI Specific Therapeutic Interventions</h6>
        <hr />
        <div className='specific'>
        <PlanCard
          plan={{
            id: 10,
            name: "LOW FODMAP",
            desc: "",
            tier: "specific",
            dist: "25P/30F/45C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        <PlanCard
          plan={{
            id: 11,
            name: "ANTI-CANDIDA",
            desc: "",
            tier: "specific",
            dist: "25P/30F/45C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        <PlanCard
          plan={{
            id: 12,
            name: "SPECIFIC CARBOHYDRATE DIET (SCD)",
            desc: "",
            tier: "specific",
            dist: "25P/30F/45C",
          }}
          selected={selected}
          setSelected={setSelected}
        />
        </div>
        </div>
    )
}
