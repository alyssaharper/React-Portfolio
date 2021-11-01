import React from 'react';
import picture from '../../assets/profilePic.jpg';

export default function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        My name is Alyssa Harper and I am a 30 year old full-stack web developer. I am on track to graduate November 2021 with knowledge on software development tools such as HTML, CSS, Node, REACT, MongoDB, MySql, and Express. 
      </p>
      <div><img className="profilePic" src={picture} alt="Me"/></div>
    </div>
  );
}
