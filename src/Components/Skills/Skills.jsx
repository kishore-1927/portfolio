import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <div className=" mt-5 mb-5 container skills-btm">
    <div className='row gap-5'>
        <h1>My Skills</h1>
        <div className="col skill-btm">
        <img width="100" height="100" src="https://img.icons8.com/fluency/100/javascript.png" alt="javascript"/>
        </div>
        <div className="col skill-btm">
        <img width="100" height="100" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/>
        </div>
        <div className="col skill-btm">
        <img width="100" height="100" src="https://img.icons8.com/color/100/bootstrap--v1.png" alt="bootstrap--v1"/>
        </div>
    </div>
    </div>
  )
}
