import React from 'react';
import "../styles/Timer.css";

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        timer: null,
        minutes: 0,
        seconds: 0,
        hours: 0,
    };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    tick() { if (this.state.seconds >= 10) {
      this.setState({
        minutes: this.state.minutes + 1,
        seconds: 0,
      })

      if(this.state.minutes >= 10 ) {
        this.setState({
          hours: this.state.hours + 1,
          minutes: 0,
        })
      }
    }
        this.setState({
        seconds: this.state.seconds + 1,}
      );
    }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    render() {
      return (
        <div className="timer-counter">
          <div className="timer"> 
          <div className='icon-clock'><i className="far fa-clock"></i></div>
          <p>{this.state.hours}<span>:</span></p>
          <p>{this.state.minutes}<span>:</span></p>
          <p>{this.state.seconds}</p>
          </div>
        </div>
      );
    }
  }
 
  export default Timer;
  