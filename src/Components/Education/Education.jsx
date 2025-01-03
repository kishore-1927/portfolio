import React from 'react'
import './Education.css'

export default function Education() {
  return (
    <div id='education' className='education container mt-5 mb-5'>
       <div className='row gap-2 '>
        <h1 className='mt-5'>My Education</h1>
            <div className="col-md-5 col-12">
                <p>2020 - 2023</p>
                <p>Bachelor of Computer Science</p>
                <hr />
                <h3>Sri Ramakrishna Mission Vidyalaya College of Arts and Science</h3>
                <p>Coimbatore, Tamilnadu</p>
                <p>This academic journey equipped me with a strong foundation in computer science principles, programming, and problem-solving techniques.</p>
            </div>
            <div className="col-md-5 col-12">
            <p>2023 - 2025</p>
                <p>Master of Computer Science</p>
                <hr />
                <h3>VLB Janakiammal College of Arts and Science</h3>
                <p>Coimbatore, Tamilnadu</p>
                <p>The college's rigorous curriculum and supportive learning environment allowed me to develop both technical and analytical skills, laying the groundwork for my career in technology and innovation.</p> 
            </div>
       </div>
    </div>
  )
}
