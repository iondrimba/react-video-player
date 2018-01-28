
import React, { Component } from 'react';
import './styles.css';

class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='timer' style={{ transform: `translateX(${this.props.position-30}px)` }}>
        {this.props.time}
      </div >
    );
  }
}

export default Timer;
