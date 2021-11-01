import React from 'react';
import linkedIn from "../assets/linkedin.png";
import facebook from "../assets/Facebook-logo.png";
import gitHub from "../assets/github.png";


const Footer = () => {
    return (
        <div>
            <footer className="footer">
            <div><img className="linkedIn" src={linkedIn} alt="linkedIn"/><a href="https://www.linkedin.com/in/alyssa-harper-9092a969/">LinkedIn</a></div>
            <div><img className="github" src={gitHub} alt="github"/><a href="https://github.com/alyssaharper">Github</a></div>
            <div><img className="facebook" src={facebook} alt="facebook"/><a href="https://www.facebook.com/alyssa.harper.58/">Facebook</a></div> 
            </footer>
        </div>
    )
}

export default Footer

