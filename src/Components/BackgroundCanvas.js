import React, { Component } from 'react';

class BackgroundCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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

    let canvasWidth = boundingRect.right - boundingRect.left;
    let canvasHeight = boundingRect.bottom - boundingRect.top;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    this.drawFish(canvasWidth, canvasHeight, xPos, yPos);
  };

  drawFish = (cWidth, cHeight, xPos, yPos) => {
    let canvas = document.querySelector('#background-canvas');
    let context = canvas.getContext('2d');

    let startX = cWidth / 15;
    let startY = cHeight * 0.75;

    let fishWidth = cWidth / 8;
    let fishHeight = cHeight / 6;

    var fishGradient = context.createLinearGradient(0, 0, fishWidth, 0);
    fishGradient.addColorStop(0, "#FFA142");
    fishGradient.addColorStop(1, "#FFC48A");

    context.fillStyle = fishGradient;

    // Fish Tail
    context.moveTo(startX + (fishWidth / 4), startY + (fishHeight / 2));
    context.lineTo(startX - (fishWidth / 6), startY);
    context.lineTo(startX - (fishWidth / 4), startY + 10);
    context.lineTo(startX - (fishWidth / 4), startY + fishHeight - 10);
    context.lineTo(startX - (fishWidth / 6), startY + fishHeight);
    context.lineTo(startX + (fishWidth / 4), startY + (fishHeight / 2));
    context.fill();

    // Upper Fin
    context.moveTo(startX + (fishWidth * 0.75), startY);
    context.lineTo(startX + (fishWidth * 0.5), startY - (fishHeight / 4));
    context.lineTo(startX, startY - (fishHeight / 4));
    context.lineTo(startX + (fishWidth * 0.25), startY);
    context.fill();

    // Lower Fin
    context.moveTo(startX + (fishWidth * 0.75), startY + fishHeight); 
    context.lineTo(startX + (fishWidth * 0.5), startY + fishHeight + (fishHeight / 8));
    context.lineTo(startX, startY + fishHeight + (fishHeight / 8));
    context.lineTo(startX + (fishWidth * 0.25), startY + fishHeight);
    context.fill();

    // Fish Body
    context.fillRect(startX, startY, fishWidth, fishHeight);

    let eyeRadius = fishHeight * 0.1;
    let eyeCenterX = startX + fishWidth * 0.8;
    let eyeCenterY = startY + fishHeight * 0.3;

    let xOffset = (xPos - eyeCenterX) / cWidth;
    let yOffset = (yPos - eyeCenterY) / cHeight;

    // console.log(xOffset, yOffset);

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
      <canvas
        id="background-canvas"
      >
      </canvas>
    );
  }
}

export default BackgroundCanvas;
