import React, { Component } from 'react';
import './styles.css';

class Seeker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moverPosition: 0
    }
  }

  componentDidMount() {
  }

  onClick(evt) {
    this.props.onSeek((evt.nativeEvent.layerX / evt.currentTarget.offsetWidth) * 100);
  }

  onMouseMove(evt) {
    this.setState({ moverPosition: (evt.nativeEvent.layerX / evt.currentTarget.offsetWidth) });
  }

  onMouseLeave() {
    this.setState({ moverPosition: 0 });
  }

  render() {
    return (
      <div className='seeker' onClick={this.onClick.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onMouseMove={this.onMouseMove.bind(this)}>
        <div className='seeker__bg'></div>
        <div className='seeker__mover' style={{ transform: `scaleX(${this.state.moverPosition})` }}></div>
        <div className='seeker__current' style={{ transform: `scaleX(${this.props.currentPosition / 100})` }} ></div>
      </div>
    );
  }
}

export default Seeker;
