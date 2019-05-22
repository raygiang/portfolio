import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
  showMenu = () => {
    let mainNav = document.querySelector("#main-nav");

    if(mainNav.classList.contains('show-menu')) {
      mainNav.classList.remove('show-menu');
    }
    else {
      mainNav.classList.add('show-menu');
    }
  };

  render() {
    return (
      <header id="header">
        <div className="page-wrapper flex-container">
          <div id="logo-container">
            <Link to="/"><img id="logo" src="images/logo.png" alt="Logo" page="0" /></Link>
          </div>
          <div id="my-name"><Link to="/">Raymond Giang</Link></div>
          <div id="hamburger-area">
            <button>
              <i id="hamburger-menu" className="fas fa-bars" onClick = { this.showMenu }></i>
            </button>
          </div>
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
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;