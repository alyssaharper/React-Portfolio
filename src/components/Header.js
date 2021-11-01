import React from 'react';
import Typed from "react-typed";

 const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Full Stack Engineer</h1>
                <Typed
                    className="typed-text"
                    strings={["Node", "Express", "React", "MongoDB"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
};

export default Header;