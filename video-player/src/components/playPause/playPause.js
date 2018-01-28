
import React, { Component } from 'react';
import './playPause.css';

class PlayPause extends Component {
  constructor(props) {
    super(props);
  }


  onPlayClick() {
    this.props.onClick(true);
  }

  onPauseClick() {
    this.props.onClick(false);
  }

  render() {
    return (
      <div className="playPause"  >
        <button onClick={this.onPlayClick.bind(this)}>play</button>
        <button onClick={this.onPauseClick.bind(this)}>pause</button>
      </div >
    );
  }
}

export default PlayPause;
