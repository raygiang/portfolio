import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
  
  // updateBackgroundSize = () => {
  //   const background = document.querySelector("#page-background");
  //   background.style.height = window.innerHeight + 'px';
  //   background.style.width = window.innerWidth + 'px';
  // };

  // componentDidMount = () => {
  //   this.updateBackgroundSize();
  //   window.onresize = this.updateBackgroundSize;
  //   window.addEventListener('orientationchange', this.updateBackgroundSize);
  // };

  render() {
    return (
      <Router>
        <Header />

        <div id="content">
          <Route path="/" exact component={Homepage} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
        </div>

        <Footer />
      </Router>
    );
  }
}

export default App;
