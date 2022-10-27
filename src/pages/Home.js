import React from "react";
import '../stylesheets/home.css'


    const Home = () => {
     return (
        <>
<div className="home-body">
    <div className="home-intro">
        <div className="p">
        <p>Paws here to find your love..</p> 
        </div>           
    <div className="button-container">
        <div>
            <button className="button1">Create Account</button>
        </div>
            <div>
                <button className="button2">Log In</button>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Home