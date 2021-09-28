import React, { useRef, useEffect  } from 'react'

import { validHeight } from '../../../utils/Regex';

export default function PatientForm({patient, setPatient}) {
    // DOM refs
    const heightInput = useRef(null);
    const weightInput = useRef(null);
    const dobMonthInput = useRef(null);
    const dobDayInput = useRef(null);
    const dobYearInput = useRef(null);
    const genderInput = useRef(null);

    // Input Handler
    const handleChange = (e) => {
        switch (e.target.name) {
          case "height":
            setPatient({
              ...patient,
              height: e.target.value,
            });
            break;
          case "weight":
            setPatient({
              ...patient,
              weight: e.target.value,
            });
            break;
          case "month":
            setPatient({
              ...patient,
              dob: {
                month: e.target.value,
              }
            })
            break;
          case 'day':
            setPatient({
              ...patient,
              dob: {
                day: e.target.value,
              }
            })
            break;
          case 'year':
            setPatient({
              ...patient,
              dob: {
                year: e.target.value
              }
            });
            break;
          case "sex":
            setPatient({
              ...patient,
              sex: e.target.value,
            });
            break;
    
          default:
            break;
        }
      };
      const resetInput = (e) => {
        e.target.value = '';
      }

      useEffect(() => {
          switch (patient.height) {
              case validHeight.test(patient.height):
                  let heightstr = patient.height.split("'").map((item)=> parseInt(item));
                  setPatient({
                      ...patient,
                      heightFt: heightstr[0],
                      heightIn: heightstr[1],
                  })
                  break;
          
              default:
                  break;
          }
      }, [patient.height])

    return (
      <div className='mainForm'>
        <h4>Determine Patient's Resting Metabolic Rate (RMR):</h4>
        <div>
          <div className="gendergrp">
            <label>
              Gender
              <select ref={genderInput} name="sex" value={patient.sex} onChange={handleChange}>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </label>
          </div>
          <div className="agegrp">
            <label>Date Of Birth</label>
            <div className="dobinputgrp">
              <label>
              Month
                <input
                  ref={dobMonthInput}
                  type="number"
                  name="month"
                  placeholder="Month"
                  value={patient.dob.month}
                  onChange={handleChange}
                  onFocus={(e)=>resetInput(e)}
                />
              </label>
              <label>
              Day
                <input
                ref={dobDayInput}
                  type="number"
                  name="day"
                  placeholder="Day"
                  value={patient.dob.day}
                  onChange={handleChange}
                  onFocus={(e)=>resetInput(e)}
                />
              </label>
              <label>
              Year
                <input
                ref={dobYearInput}
                  type="number"
                  name="year"
                  value={patient.dob.year}
                  onChange={handleChange}
                  onFocus={(e)=>resetInput(e)}
                />
              </label>
            </div>
          </div>
            <div className="heightgrp">
            <label>Height
            <input
              ref={heightInput}
              type="text"
              name="height"
              onChange={handleChange}
              value={patient.height}
              onFocus={(e)=>resetInput(e)}
            />
            </label>
          </div>
          <div className="weightgrp">
            <label>
              Weight
              <input
                ref={weightInput}
                type="number"
                name="weight"
                value={patient.weight}
                onChange={handleChange}
                onFocus={(e)=>resetInput(e)}
              />
              lbs
            </label>
          </div>
        </div>
      </div>
    )
}
