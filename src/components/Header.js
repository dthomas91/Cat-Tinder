import React from "react";
import '../stylesheets/header.css'
import cat from '../assets/cat-tinder-logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={cat} alt="Cat Tinder Logo" />
      </div>
      <div className="nav-bar">
        <ul>
          <li>HOME</li>
          <li>GO HUNTING</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>ACCOUNT</li>
        </ul>
      </div>
    </div>
  )
}

export default Header 