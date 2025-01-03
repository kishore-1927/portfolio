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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, nemo exercitationem? Molestiae, sunt facilis quis porro eius nulla earum quo perferendis doloribus inventore exercitationem natus labore amet maxime minima nostrum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi laudantium corrupti ipsum hic aliquid optio corporis, atque vitae consectetur sint at nesciunt quae quisquam illum a reprehenderit temporibus voluptatum dicta.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, accusamus!</p>
          <div className="skills mt-5">
            <div className='skill'><p>HTML/CSS</p><hr style={{ width: "50%" }} /></div>
            <div className='skill'><p>HTML/CSS</p><hr style={{ width: "70%" }} /></div>
            <div className='skill'><p>HTML/CSS</p><hr style={{ width: "80%" }} /></div>
            <div className='skill'><p>HTML/CSS</p><hr style={{ width: "20%" }} /></div>
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
