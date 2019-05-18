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
    const background = document.getElementById("page-background");
    background.style.height = window.innerHeight + 'px';
    background.style.width = window.innerWidth + 'px';

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
        <div id="page-background">
          { this.state.bubbleList }
        </div>
        <div className="page-wrapper">
          <div id="site-name">Raymond Giang</div>
          <p id="subheading">Full Stack Web Developer</p>
        </div>
      </div>
    );
  }
}

export default Homepage;
