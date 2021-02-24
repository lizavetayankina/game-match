import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/Timer.css";

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.timer = null;
      this.state = {
          minutes: 0,
          seconds: 0,
    };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    tick() {
        this.setState( {
          minutes: this.state.minutes + 1,
          seconds: this.state.seconds + 1,
        });
      }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    
    render() {
      return (
        <div className="timer-counter">
          <div className="timer">
          <p>{this.state.minutes}:</p>
          <p>{this.state.seconds}</p>
          </div>
        </div>
      );
    }
  }
  

  export default Timer;
  