
import React, { Component } from 'react';
import './hotSpot.css';
import Star from '../star/star';
import convertFormatedTimeToSeconds from '../../helpers/converter';

class HotSpot extends Component {
  constructor(props) {
    super(props);
  }

  getSpotPosition(time, duration) {
    const seconds = convertFormatedTimeToSeconds(time);
    const percent = (seconds / duration) * 100;
    return { transform: `translateX(${(percent * 360) / 100}px)` };
  }

  onClick() {
    this.props.onClick(this.props.spot);
  }

  render() {
    return (
      <div className="spot" onClick={this.onClick.bind(this)} style={this.getSpotPosition(this.props.spot.time, this.props.duration)}>
       <Star/>
        <div className="thumb">
          <img src={this.props.spot.thumb} width={200} height={150} />
          <p>{this.props.spot.description}</p>
        </div>
      </div>
    );
  }
}

export default HotSpot;
