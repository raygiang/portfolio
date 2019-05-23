import React, { Component } from 'react';
import Bubble from './Bubble';

class BackgroundCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animWidth: 0,
      fishPos: 0,
    }
    this.fishY = 0;
    this.animationInterval = null;
    this.animationWidth = null;
    this.currWidth = null;
    this.fishWidth = 0;
    this.fishHeight = 0;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.bubbleInterval = null;
    this.bubbles = [];
  }

  bubblePop = () => {
    this.bubbles.pop();
  }

  componentDidMount = () => {
    window.addEventListener("mousemove", this.updateFish);
    
    this.updateFish();

    this.animationInterval = setInterval(() => {
      this.currWidth = (this.currWidth + 0.5) % this.animationWidth;

      if(this.currWidth > this.animationWidth / 2) {
        this.setState({
          animWidth: (this.animationWidth / 2) - this.currWidth % (this.animationWidth / 2),
          fishPos: (this.state.fishPos + 1) % window.innerWidth,
        });
      }
      else {
        this.setState({
          animWidth: this.currWidth,
          fishPos: (this.state.fishPos + 1) % window.innerWidth,
        });
      }
    }, 10);

    setInterval(() => {
      // console.log(window.pageYOffset);
      if(this.bubbles.length < 1) {
        this.bubbles.push(
          <Bubble
            key={ this.bubbles.length }
            bubbleX={ this.state.fishPos + this.fishWidth }
            bubbleY={ this.fishY - window.pageYOffset + this.fishHeight * 0.52 }
            bubblePop={ this.bubblePop }
          />
        );
      }
    }, 1000)
  };

  componentWillUnmount = () => {
    window.removeEventListener("mousemove", this.updateFish);
    clearInterval(this.animationInterval);
  };

  componentDidUpdate = () => {
    this.updateFish();
  };

  updateFish = (e) => {
    let canvas = document.querySelector('#background-canvas');
    let boundingRect = canvas.getBoundingClientRect();

    this.lastMouseX = e ? e.clientX - boundingRect.left : this.lastMouseX;
    this.lastMouseY = e ? e.clientY - boundingRect.top : this.lastMouseY;

    let canvasWidth = boundingRect.right - boundingRect.left;
    let canvasHeight = boundingRect.bottom - boundingRect.top;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    this.drawFish(canvasWidth, canvasHeight, this.lastMouseX, this.lastMouseY);
  };

  drawFish = (cWidth, cHeight) => {
    let canvas = document.querySelector('#background-canvas');
    let context = canvas.getContext('2d');

    this.fishY = cHeight * 0.70;

    let fishHeight = cHeight / 8;
    let fishWidth = cWidth / 10;

    this.fishWidth = fishWidth;
    this.fishHeight = fishHeight;
    this.animationWidth = fishWidth / 10;
    
    if(fishWidth < fishHeight) {
      fishWidth = fishHeight;
    }

    var fishGradient = context.createLinearGradient(0, 0, fishWidth, 0);
    fishGradient.addColorStop(0, "#FFA142");
    fishGradient.addColorStop(1, "#FFC48A");

    context.fillStyle = fishGradient;

    // Fish Tail
    context.moveTo(this.state.fishPos + (fishWidth / 4), this.fishY + (fishHeight / 2));
    context.lineTo(this.state.fishPos - (fishWidth / 6) + this.state.animWidth, this.fishY);
    context.lineTo(this.state.fishPos - (fishWidth / 4) + this.state.animWidth, this.fishY + 10);
    context.lineTo(this.state.fishPos - (fishWidth / 4) + this.state.animWidth, this.fishY + fishHeight - 10);
    context.lineTo(this.state.fishPos - (fishWidth / 6) + this.state.animWidth, this.fishY + fishHeight);
    context.lineTo(this.state.fishPos + (fishWidth / 4), this.fishY + (fishHeight / 2));
    context.fill();

    // Upper Fin
    context.moveTo(this.state.fishPos + (fishWidth * 0.75), this.fishY);
    context.lineTo(this.state.fishPos + (fishWidth * 0.5) + this.state.animWidth, this.fishY - (fishHeight / 4));
    context.lineTo(this.state.fishPos + this.state.animWidth, this.fishY - (fishHeight / 4));
    context.lineTo(this.state.fishPos + this.state.animWidth + (fishWidth * 0.25), this.fishY);
    context.fill();

    // Lower Fin
    context.moveTo(this.state.fishPos + (fishWidth * 0.75), this.fishY + fishHeight); 
    context.lineTo(this.state.fishPos + (fishWidth * 0.5)  + this.state.animWidth, this.fishY + fishHeight + (fishHeight / 8));
    context.lineTo(this.state.fishPos + this.state.animWidth, this.fishY + fishHeight + (fishHeight / 8));
    context.lineTo(this.state.fishPos + this.state.animWidth + (fishWidth * 0.25), this.fishY + fishHeight);
    context.fill();

    // Fish Body
    context.fillRect(this.state.fishPos, this.fishY, fishWidth, fishHeight);

    // Fish Mouth
    context.fillStyle =  "#FF8080";
    context.beginPath();
    context.beginPath();
    context.arc(this.state.fishPos + fishWidth * 0.92, this.fishY + fishHeight * 0.7, fishWidth / 24, 0, 2 * Math.PI);
    context.fill();

    let eyeRadius = fishWidth * 0.1;
    let eyeCenterX = this.state.fishPos + fishWidth * 0.8;
    let eyeCenterY = this.fishY + fishHeight * 0.3;

    let xOffset = (this.lastMouseX - eyeCenterX) / cWidth;
    let yOffset = (this.lastMouseY - eyeCenterY) / cHeight;

    // Eyeball
    context.fillStyle =  "#FFF";
    context.beginPath();
    context.arc(eyeCenterX, eyeCenterY, eyeRadius, 0, 2 * Math.PI);
    context.fill();

    // Pupil
    context.fillStyle =  "#000";
    context.beginPath();
    context.arc(eyeCenterX + (eyeRadius / 2 * xOffset), eyeCenterY + (eyeRadius / 2 * yOffset), eyeRadius / 2, 0, 2 * Math.PI);
    context.fill();
  };

  render() {
    return (
      <div style={{height:'100%'}}>
        <canvas id="background-canvas">
        </canvas>
        {this.bubbles[0]}
      </div>
    );
  }
}

export default BackgroundCanvas;
