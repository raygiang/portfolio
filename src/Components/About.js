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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
