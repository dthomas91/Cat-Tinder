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
          <a href=".." className="links"><li>HOME</li></a>
          <a href="../catindex" className="links"><li>VIEW CATS</li></a>
          <a href="../catnew" className="links"><li>FIND LOVE</li></a>
          <a href="../notfound" className="links"><li>CONTACT</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Header 