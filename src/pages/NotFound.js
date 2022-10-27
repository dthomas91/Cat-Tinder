import React from "react";
import '../stylesheets/notfound.css'
import notfound from '../assets/notfound.png'
import notfound1 from '../assets/notfound1.png'
import notfound2 from '../assets/notfound2.png'

const NotFound = () => {
    return (
        <div className="notfoundpics">
            <img src={notfound} alt="Christian is a cat" className="scarycat"></img>
            <img src={notfound1} alt="Zack is a cat" className="scarycat1"></img>
            <img src={notfound2} alt="David is a cat" className="scarycat2"></img>
        </div>
    )
}

export default NotFound