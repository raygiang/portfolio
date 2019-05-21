import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <div className="page-wrapper flex-container">
        <div id="logo-container">
          <Link to="/"><img id="logo" src="images/logo.png" alt="Logo" page="0" /></Link>
        </div>
        <div id="my-name"><Link to="/">Raymond Giang</Link></div>
        <nav id="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Me</Link>
            </li>
            <li>
              <Link to="/Projects">My Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;