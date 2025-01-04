import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <div id='skills' className=" mt-5 mb-5 container skills-btm">
    <div className='row my-skills gap-5'>
        <h1>My Skills</h1>
        <div className=" col-6 col-md-4  skill-btm">
        <img width="80" height="80" src="https://img.icons8.com/fluency/100/javascript.png" alt="javascript"/>
        </div>
        <div className="col-md-4 col-6 skill-btm">
        <img width="80" height="80" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/>
        </div>
        <div className="col-md-4 col-6 skill-btm">
        <img width="80" height="80" src="https://img.icons8.com/color/100/bootstrap--v1.png" alt="bootstrap--v1"/>
        </div>
        <div className="col-md-4 col-6 skill-btm">
        <img width="80" height="80" src="https://img.icons8.com/ios/50/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
        </div>
        <div className="col-md-4 col-6 skill-btm">
        <img width="100" height="100" src="https://img.icons8.com/color/100/html-5.png" alt="html-5"/>
        </div>
        <div className="col-md-4 col-6 skill-btm">
        <img width="100" height="100" src="https://img.icons8.com/plasticine/100/css3.png" alt="css3"/>
        </div>
    </div>
    </div>
  )
}
