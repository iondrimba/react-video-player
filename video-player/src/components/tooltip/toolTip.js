

import React, { Component } from 'react';
import '../tooltip/toolTip.css';

class HotSpot extends Component {
  render() {
    return (
      <div className="thumb">
        <img src={this.props.thumb} width={200} height={150} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HotSpot;
