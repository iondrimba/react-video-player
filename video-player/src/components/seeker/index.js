import React, { Component } from 'react';
import { convertSecondsToHHMMss, percent } from '../../helpers/converter';
import Timer from '../timer';
import './styles.css';

class Seeker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: 0,
      duration: this.props.duration,
      mousePosition: 0,
      time: 0
    }
  }

  onClick(evt) {
    this.props.onSeek(percent(evt.nativeEvent.layerX, evt.currentTarget.offsetWidth));
  }

  onMouseMove(evt) {
    const percentTime = percent(evt.nativeEvent.layerX, evt.currentTarget.offsetWidth);
    const seconds = (percentTime * this.props.duration) / 100;

    this.setState({ time: convertSecondsToHHMMss(seconds), mousePosition: evt.nativeEvent.layerX, scale: (evt.nativeEvent.layerX / evt.currentTarget.offsetWidth) });
  }

  onMouseLeave() {
    this.setState({ scale: 0 });
  }

  render() {
    return (
      <div className='seeker' onClick={this.onClick.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onMouseMove={this.onMouseMove.bind(this)}>
        <Timer time={this.state.time} position={this.state.mousePosition} />
        <div className='seeker__bg'></div>
        <div className='seeker__mover' style={{ transform: `scaleX(${this.state.scale})` }}></div>
        <div className='seeker__current' style={{ transform: `scaleX(${this.props.currentPosition / 100})` }} ></div>
      </div>
    );
  }
}

export default Seeker;
