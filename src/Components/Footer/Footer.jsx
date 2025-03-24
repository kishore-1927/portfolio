import React from 'react'
import './Footer.css'
import logo from '../Images/kishore-logo-bg.png'

export default function Footer() {
  return (
    <div className='container footer'>
        <div className="row gap-3 footer-row">
            <div className="col-md-3 col-12">
                <img width={200} src={logo} alt="" />
                <p></p>
            </div>
            <div className="col-md-3 col-12 d-flex flex-column">
                <h2>Get in touch</h2>
                <a href="mailto:kishoreanand2846@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect.">kishoreanand2846@gmail.com</a>
                <a href="tel:+919655094620">+91 96550 94620</a>
            </div>
            <div className="col-md-3 col-12 d-flex flex-column">
                <h2>Connect</h2>
                <a href="https://www.linkedin.com/in/kishore-kumar-a-b4a268218/">Linkedin</a>
                <a href="">instagram</a>
                <a href="https://github.com/kishore-1927">Github</a>
            </div>
        </div>
    </div>
  )
}
