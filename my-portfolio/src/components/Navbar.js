import React from "react";
import logo from "../alyssa_logo2.png";



const Navbar = () => { 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#" style={{ color: '#30D5C8', fontWeight: 'bold'  }}>ABOUT ME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: '#30D5C8', fontWeight: 'bold'  }}>PROJECTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: '#30D5C8', fontWeight: 'bold'  }}>EDUCATION</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: '#30D5C8', fontWeight: 'bold'  }}>CONTACT ME</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;
