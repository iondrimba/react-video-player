
import React, { Component } from 'react';
import './hotSpot.css';
import convertFormatedTimeToSeconds from '../../helpers/converter';

class HotSpot extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  convertFormatedTimeToSeconds(time) {
    return time.split(':').reduce((acc, time) => (60 * acc) + +time);
  }

  getSpotPosition(time, duration) {
    const seconds = convertFormatedTimeToSeconds(time);
    const percent = (seconds / duration) * 100;
    return { transform: `translateX(${(percent * 360) / 100}px)` };
  }

  render() {
    return (
      <div className="spot" style={this.getSpotPosition(this.props.spot.time, this.props.duration)}>
        <div className="thumb">
          <img src={this.props.spot.thumb} width={200} height={150} />
          <p>{this.props.spot.description}</p>
        </div>
      </div>
    );
  }
}

export default HotSpot;
