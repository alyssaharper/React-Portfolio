import React from "react";
import logo from "../alyssa_logo2.png";



function Navbar({ currentPage, handlePageChange }) { 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className={currentPage === 'Header' ? 'nav-link active' : 'nav-link'} href="#header"><img className="logo nav-item" src={logo} alt="logo"
    onClick={() => handlePageChange('Header')}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
           aria-current="page"
            href="#aboutme" 
            style={{ color: '#30D5C8', fontWeight: 'bold'  }}
            onClick={() => handlePageChange('AboutMe')}>ABOUT ME</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
          href="#portfolio" 
          style={{ color: '#30D5C8', fontWeight: 'bold'  }}
          onClick={() => handlePageChange('Portfolio')}>PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
          href="#contact" 
          style={{ color: '#30D5C8', fontWeight: 'bold'  }}
          onClick={() => handlePageChange('Contact')}>CONTACT ME</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          href="#resume" 
          style={{ color: '#30D5C8', fontWeight: 'bold'  }}
          onClick={() => handlePageChange('Resume')}>RESUME</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;
