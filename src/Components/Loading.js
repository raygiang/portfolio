import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationFrame: 0,
      letters: [],
    }

    this.text = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];
    this.animationInterval = null;
    this.extraStyles = { animation: 'expand 0.5s 1 ease-in forwards' };
  }

  // Get the loading letters corresponding to this animation frame
  loadLetters = () => {
    let newLetters = this.text.map((letter, index) => {
      if(index === this.state.animationFrame) {
        return(
          <div key={ index } className="loading-letters" style={ this.extraStyles }>
            { this.text[index] }
          </div>
        )
      }
      else {
        return (
          <div key={ index } className="loading-letters">
            { this.text[index] }
          </div>
        )
      }
    });

    let newFrame = (this.state.animationFrame + 1) % this.text.length;

    this.setState({
      letters: newLetters,
      animationFrame: newFrame,
    })
  };

  componentDidMount = () => {
    this.loadLetters();

    this.animationInterval = setInterval(this.loadLetters, 390);
  };

  componentWillUnmount = () => {
    clearInterval(this.animationInterval);
  };

  render() {
    return (
      <div id="loading">
        <div id="loading-animation">
          <div 
            id="loading-bubble"
            style={{
              width: '50px',
              height: '50px',
            }}>
          </div>
        </div>
        { this.state.letters }
      </div>
    );
  }
}

export default Loading;
