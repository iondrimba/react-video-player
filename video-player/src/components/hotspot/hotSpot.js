
import React, { Component } from 'react';
import { convertFormatedTimeToSeconds, percent } from '../../helpers/converter';
import Star from '../star/star';
import ToolTip from '../tooltip/toolTip';
import './hotSpot.css';

class HotSpot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spot: {}
    }
  }

  getSpotPosition(time, duration) {
    const seconds = convertFormatedTimeToSeconds(time);
    return { transform: `translateX(${(percent(seconds, duration) * this.props.containerWidth) / 100}px)` };
  }

  onClick() {
    this.props.onClick(this.props.spot);
  }

  onMouseOver(spot) {
    this.setState({ spot });
  }

  onMouseLeave() {
    this.setState({ spot: {} });
  }

  toolTip() {
    let toolTip = null;
    if (this.state.spot.name) {
      toolTip = <ToolTip animate={true} thumb={this.state.spot.thumb} description={this.state.spot.description} />
    }
    return toolTip;
  }

  render() {
    return (
      <div ref={(spot) => { this.spot = spot; }} className="spot" onMouseLeave={this.onMouseLeave.bind(this)} onMouseOver={this.onMouseOver.bind(this, this.props.spot)} onClick={this.onClick.bind(this)} style={this.getSpotPosition(this.props.spot.time, this.props.duration)}>
        <Star />
        {this.toolTip()}
      </div>
    );
  }
}

export default HotSpot;
