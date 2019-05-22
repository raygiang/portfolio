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
              Hi, making websites is very hard.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
