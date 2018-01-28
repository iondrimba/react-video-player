import React, { Component } from 'react';
import './seeker.css';

class Seeker extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onClick(evt) {
    this.props.onSeek((evt.nativeEvent.layerX / evt.currentTarget.offsetWidth) * 100);
  }
  render() {
    return (
      <div onClick={this.onClick.bind(this)} className="sliders">
        <div className="bg"></div>
        <div style={{ transform: `scaleX(${this.props.currentPosition / 100})` }} className="current"></div>
        {this.props.children}
      </div>
    );
  }
}

export default Seeker;
