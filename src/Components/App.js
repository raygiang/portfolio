import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const background = document.querySelector("#page-background");
    background.style.height = window.innerHeight + 'px';
    background.style.width = window.innerWidth + 'px';
  }

  render() {
    return (
      <Router>
        <div id="page-background"></div>

        <Header />

        <Route path="/" exact component={Homepage} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Router>
    );
  }
}

export default App;
