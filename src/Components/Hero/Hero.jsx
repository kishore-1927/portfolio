import React from 'react'
import  kishorepic from '../Images/kishore-pic.png'
import nobg from '../Images/pic-no-bg.png'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
  return (
    <div id='home'>
        <div className='hero container mt-3 gap-3'>
            <img src='' width={300} height={300} alt="" />
            <h1><span>I'm Kishore Kumar</span>, Full stack developer</h1>
            <p>I am Kishore Kumar, a skilled full-stack developer with expertise in building dynamic and scalable web applications. Passionate about coding, I specialize in designing user-friendly interfaces and developing robust back-end systems to deliver seamless digital experiences.</p>
            <div className="hero-action gap-3 d-flex mt-3">
                <AnchorLink href='#contact' offset={50}><button className='hero-connect'>Connet</button></AnchorLink> 
                <button className='hero-resume'><a href='/kishore_cv.pdf' download='/kishore_CV.pdf'>My Resume</a></button>
            </div>
        </div>
    </div>
  )
}
