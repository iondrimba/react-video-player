import React, { Component } from 'react';
import './styles.css';

class Timer extends Component {
  render() {
    return (
      <div className={this.props.display ? 'timer' : 'timer timer--hide'} style={{ transform: `translateX(${this.props.position - 30}px)` }}>
        {this.props.time}
      </div >
    );
  }
}

export default Timer;
