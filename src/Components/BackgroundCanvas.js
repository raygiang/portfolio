import React, { Component } from 'react';

class BackgroundCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.backgroundCanvas = React.createRef();
    this.context = null;
  }

  componentDidMount = () => {
    window.addEventListener("mousemove", this.makeSparks);
  };

  componentWillUnmount = () => {
    window.removeEventListener("mousemove", this.makeSparks);
  };

  makeSparks = (e) => {
    let canvas = document.querySelector('#background-canvas');
    let context = canvas.getContext('2d');
    let boundingRect = canvas.getBoundingClientRect();

    let xPos = e.clientX - boundingRect.left;
    let yPos = e.clientY - boundingRect.top;

    let canvasWidth = canvas.width = boundingRect.right - boundingRect.left;
    let canvasHeight = boundingRect.bottom - boundingRect.top;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.rect(xPos-10, yPos-10, 20, 20);
    context.stroke();
  }

  render() {
    return (
      <canvas
        id="background-canvas"
        ref={ this.backgroundCanvas }
      >
      </canvas>
    );
  }
}

export default BackgroundCanvas;
