import React, { Component } from 'react';
import BackgroundCanvas from './BackgroundCanvas';

class About extends Component {
  render() {
    return (
      <div>
        <BackgroundCanvas />
        <div className="page-wrapper">
          <div id="about-me">
            <h2>About Me</h2>
            <div>
              Hi, my name is Raymond Giang. I am a full stack web developer based in Toronto.
              Thank you for visiting my portfolio website.
            </div>
            <h3>Summary of Skills</h3>
            <div id="skills-area">
              <div id="front-end-box">
                <h4 className="skills-heading">Front End</h4>
                <div className="skills-section">
                  <ul className="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>React</li>
                    <li>SASS</li>
                  </ul>
                </div>
              </div>
              <div id="back-end-box">
                <h4 className="skills-heading">Back End</h4>
                <div className="skills-section">
                  <h5>Languages and Frameworks</h5>
                  <ul className="skills-list">
                    <li>PHP</li>
                    <li>ASP.NET</li>
                    <li>Node.js</li>
                    <li>Socket.io</li>
                    <li>Express</li>
                  </ul>
                </div>
                <div className="skills-section">
                  <h5>Database</h5>
                  <ul className="skills-list">
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Oracle</li>
                    <li>MSSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
