import React from "react";
import '../stylesheets/header.css'
import cat from '../assets/cat-tinder-logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={cat} alt="Cat Tinder Logo"/>
      </div>
      <div className="nav-bar">
        <ul>
          <li>Tab 1</li>
          <li>Tab 2</li>
          <li>Tab 3</li>
          <li>Tab 4</li>
        </ul>
      </div>
    </div>
  )
}

export default Header 