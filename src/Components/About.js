import React, { Component } from 'react';
import BackgroundCanvas from './BackgroundCanvas';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-background">
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
