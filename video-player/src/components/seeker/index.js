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
      <div className='sliders' onClick={this.onClick.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onMouseMove={this.onMouseMove.bind(this)}>
        <div className='sliders__bg'></div>
        <div className='sliders__mover' style={{ transform: `scaleX(${this.state.moverPosition})` }}></div>
        <div className='sliders__current' style={{ transform: `scaleX(${this.props.currentPosition / 100})` }} ></div>
      </div>
    );
  }
}

export default Seeker;
