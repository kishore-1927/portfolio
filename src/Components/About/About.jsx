import React from 'react'
import './About.css'
import pic from '../Images/pic-no-bg.png'

export default function About() {
  return (
    <div id='about' className='container about pt-5'>
      <div className='row mb-5'>
        <h1 className='mt-5 mb-5'>About me</h1>
        <div className="col-md-6 col-12">
          <img className='about-img' src="" alt="" />
        </div>
        <div className="col-md-6 col-12 content">
          <p>I am Kishore Kumar, an enthusiastic and skilled full-stack developer with a Bachelor’s degree in Computer Science. I have hands-on experience in building functional web applications, including developing an e-commerce platform using React.js and a full-stack online movie ticket booking system with PHP and MySQL. With expertise in HTML, CSS, JavaScript, and React, I bring a strong foundation in front-end and back-end technologies. My internship in Python development allowed me to enhance my skills in automation and debugging. I am passionate about creating efficient, responsive, and user-friendly applications while continually expanding my technical knowledge.</p>
          <p> I have experience building dynamic web applications, and am eager to contribute to innovative projects while enhancing my skills.</p>
          <div className="skills mt-5">
            <div className='skill'><p>JAVA</p><hr style={{ width: "50%" }} /></div>
            <div className='skill'><p>REACT</p><hr style={{ width: "70%" }} /></div>
            <div className='skill'><p>JAVASCRIPT</p><hr style={{ width: "70%" }} /></div>
            <div className='skill'><p>BOOTSTRAP</p><hr style={{ width: "80%" }} /></div>
            <div className='skill'><p>HTML/CSS</p><hr style={{ width: "90%" }} /></div>
          </div>
          
        </div>
      </div>
      <div className="achievement container  mt-4 mb-5">
        <div className="row gap-5 ">
            <div class="card col-md-3 col-12" >
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card col-md-3 col-12">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card col-md-3 col-12" >
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>
          </div>
    </div>
  )
}
