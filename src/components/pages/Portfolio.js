import React from 'react';
import eatWeighFit from '../../assets/eatweighfit.png';
import marvel from '../../assets/Marvel_Cocktail_Project.png';
import weather from '../../assets/Weather_Dashboard.png';
import dayPlanner from '../../assets/DayPlanner.png';


export default function Portfolio() {
  return (
    <div className="columns">
<div className="column is-3">
    <h2 id="work" className="work">Work</h2>
 </div>
<div className="column is-9">
    <aside className="myWork">
        <div className="workbig">
            <div><img id="fanpage" src={eatWeighFit} alt="First Project"/></div>
            <div className="workinfo">
                <div className="title is-5"><a href="https://eatweightfit.herokuapp.com/" target="_blank" rel="noreferrer">Eat, Weigh, Fit</a></div>
                <div className="subtitle is-6"><a href="https://github.com/alyssaharper/EatWeighFit" target="_blank" rel="noreferrer">Eat, Weigh, Fit Repository</a></div>
            </div>
        </div>
         <div className="workbig">
            <div><img id="fanpage" src={marvel} alt="First Project"/></div>
            <div className="workinfo">
                <div className="title is-5"><a href="https://alyssaharper.github.io/Marvel-Superhero-Cocktails-Mocktails/" target="_blank" rel="noreferrer">Marvel Cocktail Generator</a></div>
                <div className="subtitle is-6"><a href="https://github.com/alyssaharper/Marvel-Superhero-Cocktails-Mocktails" target="_blank" rel="noreferrer">Marvel Cocktail Generator Repository</a></div>
            </div>
        </div>
         <div className="worksmall">
            <div><img src={weather} alt="Second Project"/></div>
            <div className="workinfo">
                <div className="title is-5"><a href="https://alyssaharper.github.io/Weather_Dashboard/" target="_blank" rel="noreferrer">Weather Dashboard</a></div>
                <div className="subtitle is-6"><a href="https://github.com/alyssaharper/Weather_Dashboard" target="_blank" rel="noreferrer">Weather Dashboard Repository</a></div>
            </div>
        </div>
         <div className="worksmall">
            <div><img src={dayPlanner} alt="Third Project"/></div>
            <div className="workinfo">
                <div className="title is-5"><a href="https://alyssaharper.github.io/Day_Planner/" target="_blank" rel="noreferrer">Day Planner</a></div>
                <div className="subtitle is-6"><a href="https://github.com/alyssaharper/Day_Planner" target="_blank" rel="noreferrer">Day Planner Repository</a></div>
            </div>
         </div>
     </aside>
</div>
</div>
  );
}