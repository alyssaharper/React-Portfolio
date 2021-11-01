import React from 'react';
import resume from '../../assets/Alyssa_Harper_Resume_2021.pages';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <h5>Download my <span><a href={resume} target="_blank" rel="noreferrer">Resume</a></span></h5>
      <h5>Front-end Proficiencies</h5>
        <li>React</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
      <h5>Back-end Proficiencies</h5>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>GraphQL</li>
    </div>
  );
}