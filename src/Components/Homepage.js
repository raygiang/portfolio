import React, { Component } from 'react';
import Bubble from './Bubble';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bubbleList: '',
    }

    this.canvas = null;
    this.context = null;
  }

  componentDidMount = () => {
    let bubbleList = [];

    for(let i=0; i<100; i++) {
      bubbleList.push(<Bubble key={i} index={i} bubblePop={this.bubblePop} />);
    }

    this.setState({
      bubbleList: bubbleList,
    });
  };

  bubblePop = (index) => {
    let newBubbleList = this.state.bubbleList;
    newBubbleList[index] = "";
    let newIndex = newBubbleList.length;
    newBubbleList.push(<Bubble key={newIndex} index={newIndex} bubblePop={this.bubblePop} />);

    this.setState({
      bubbleList: newBubbleList,
    });
  };

  render() {
    return (
      <div>
        <div>
          { this.state.bubbleList }
        </div>
        <div className="page-wrapper">
          <div id="site-name">Raymond Giang</div>
          <p id="subheading">Full Stack Web Developer</p>
          <a title="My Github" href="https://www.github.com/raygiang8" id="github-link" target="_blank" rel="noopener noreferrer">
            <i id="github-icon" className="fab fa-github button-icon"></i>
            Find me on Github
          </a>
          <a title="Email Me!" href="mailto:raymondgiang@gmail.com" id="mail-link">
            <i id="mail-icon" className="far fa-envelope button-icon"></i>
            raymondgiang@gmail.com
          </a>          
        </div>
      </div>
    );
  }
}

export default Homepage;
