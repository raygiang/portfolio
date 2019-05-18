import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <Header />

      <div>
        <Route path="/" exact component={Homepage} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={About} />
      </div>
    </Router>
  );
}

export default App;
