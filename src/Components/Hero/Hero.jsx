import React from 'react'
import  kishorepic from '../Images/kishore-pic.png'
import nobg from '../Images/pic-no-bg.png'
import './Hero.css'

export default function Hero() {
  return (
    <div id='home'>
        <div className='hero container mt-3 gap-3'>
            <img src='' width={300} height={300} alt="" />
            <h1><span>I'm Kishore Kumar</span>, Full stack developer</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, ut voluptatum? At consectetur assumenda esse hic minus illum quasi ipsum ab fugit tempore, eos quia voluptate illo perferendis reprehenderit commodi.</p>
            <div className="hero-action gap-3 d-flex mt-3">
                <button className='hero-connect'>Connet</button>
                <button className='hero-resume'><a href='/kishore_CV.pdf' download='/kishore_CV.pdf'>My Resume</a></button>
            </div>
        </div>
    </div>
  )
}
