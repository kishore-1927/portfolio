import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../Images/kishore-logo-bg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navbar() {
  const menuRef = useRef()
  function navOpen(){
      menuRef.current.style.right="0";
  }
  function navClose(){
      menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
       <div className='nav-content container d-flex justify-content-between'>
          <div>
            <img width={100} src={logo} alt="" />
            <img onClick={navOpen}  className='nav-open' width="20" height="20" src="https://img.icons8.com/ios-filled/20/FFFFFF/menu--v1.png" alt="menu--v1"/>
          </div>
          <div>
            <ul ref={menuRef} className='d-flex nav-menu gap-5 '>
            <img onClick={navClose} className='nav-close' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/macos-close.png" alt="macos-close"/>
              <li><AnchorLink className='nav-item' offset={50} href='#home'>Home</AnchorLink> </li>
              <li><AnchorLink className='nav-item' offset={50} href='#about'>About</AnchorLink> </li>
              <li><AnchorLink className='nav-item' offset={50} href='#education'>Education</AnchorLink> </li>
              <li><AnchorLink className='nav-item' offset={50} href='#projects'>Projects</AnchorLink> </li>
              <li><AnchorLink className='nav-item' offset={50} href='#contact'>Contact</AnchorLink> </li>
            </ul>
          </div>
          <div className='connect'>
            <button>Connect with me</button>
          </div>
       </div>
    </div>
  )
}
