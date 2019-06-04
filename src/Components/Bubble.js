import React, { Component } from 'react';

class Bubble extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bubbleStyle: {},
    }

    this.diameter = null;
    this.startX = null;
    this.startY = null;
    this.riseRate = null;
  }

  componentDidMount = () => {
    this.diameter = Math.random() * (75 - 20) + 20; // Random diameter from 20px-50px
    this.startX = this.props.bubbleX ? this.props.bubbleX : Math.random() * window.innerWidth; // Random x location
    this.startY = this.props.bubbleY ? this.props.bubbleY : Math.random() * window.innerHeight; // Random y location
    this.riseRate = Math.random() * (60 - 10) + 10; // Random rise rate

    let riseCounter = 1;

    let bubbleStyle = {
      width: this.diameter + 'px',
      height: this.diameter + 'px',
      top: this.startY - riseCounter + 'px',
      left: this.startX + 'px',
      animation: `lift ${this.riseRate}s 1 ease-in forwards`,
    }

    this.setState({
      bubbleStyle: bubbleStyle,
    });
  };

  // Changes the bubble to red when hovered
  bubbleHovered = () => {
    let bubbleStyle = {
      width: this.diameter + 'px',
      height: this.diameter + 'px',
      top: this.startY + 'px',
      left: this.startX + 'px',
      background: 'red',
      animation: `lift ${this.riseRate}s 1 ease-in forwards`,
    };

    this.setState({
      bubbleStyle: bubbleStyle,
    });
  };

  pop = () => {
    this.props.bubblePop(this.props.index);
  };

  render() {
    return (
      <div
        className="background-bubble"
        style={ this.state.bubbleStyle }
        onMouseEnter={ this.bubbleHovered }
        onMouseLeave={ this.pop }
        onClick={ this.pop }
        onAnimationEnd={ this.pop }
      >
      </div>
    );
  }
}

export default Bubble;