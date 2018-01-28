
import React, { Component } from 'react';
import { convertFormatedTimeToSeconds, percent } from '../../helpers/converter';
import Star from '../star/star';
import ToolTip from '../tooltip/toolTip';
import './hotSpot.css';

class HotSpot extends Component {
  constructor(props) {
    super(props);
  }

  getSpotPosition(time, duration) {
    const seconds = convertFormatedTimeToSeconds(time);
    return { transform: `translateX(${(percent(seconds, duration) * this.props.containerWidth) / 100}px)` };
  }

  onClick() {
    this.props.onClick(this.props.spot);
  }

  render() {
    return (
      <div ref={(spot) => { this.spot = spot; }} className="spot" onClick={this.onClick.bind(this)} style={this.getSpotPosition(this.props.spot.time, this.props.duration)}>
        <Star />
        <ToolTip thumb={this.props.spot.thumb} description={this.props.spot.description} />
      </div>
    );
  }
}

export default HotSpot;
