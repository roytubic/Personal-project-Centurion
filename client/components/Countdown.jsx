import React from "react";

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 5, //time in seconds
      count: 0
    };
  }

  getSeconds() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  }

  getCount(){
     return ('0' + (this.state.count)).slice(-2);
  }

  updateCount(){
    this.setState({ count: this.state.count + 1 })
  }

  soundOne = new Audio('/sounds/tfs-drink.mp3')

  startTime() {
    var _this = this;
    this.countdown = setInterval(function() {
      if (_this.state.secondsElapsed == 0){
        _this.resetTime()
        _this.updateCount()
        _this.props.reloadQuote()
        _this.soundOne.play()
        _this.endGame()
      }
      _this.setState({ secondsElapsed: _this.state.secondsElapsed - 1 });
    }, 1000);
    
  }

  resetTime() {
    this.reset = this.setState({
      secondsElapsed: (this.state.secondsElapsed = 60)
    });
  }

  pauseTime() {
    clearInterval(this.countdown);
  }

  endGame = () => {
    if (this.state.count == 100){
      this.pauseTime()
    }
  }

  render() {
    return (
      <div className="App">
        <div className="timer-container">
          <div className="bloc-timer"> {this.getSeconds()} </div>          
          <div className="bloc-count">{this.getCount()}</div>
        </div>
        <div className="timer-container">
          <button onClick={() => this.startTime()}>Start</button>
          <button onClick={() => this.pauseTime()}>Pause</button>
        </div>
      </div>
    );
  }
}
