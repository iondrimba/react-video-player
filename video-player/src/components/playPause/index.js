import React, { Component } from 'react';
import './styles.css';

class PlayPause extends Component {
  onPlayClick() {
    this.props.onClick(true);
  }

  onPauseClick() {
    this.props.onClick(false);
  }

  render() {
    return (
      <div className='play-pause'>
        <svg onClick={this.onPlayClick.bind(this)} className={`button ${this.props.playing ? 'hide' : ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 283.5 283.5'>
          <circle cx='141.7' cy='141.7' r='137.5' className='button__bg' />
          <path d='M113.6 78.1L201.8 141.7 113.6 205.4' className='button__icon' />
        </svg>
        <svg onClick={this.onPauseClick.bind(this)} className={`button ${this.props.playing ? '' : 'hide'}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 283.5 283.5'>
          <circle cx='141.7' cy='141.7' r='137.5' className='button__bg' />
          <g xmlns="http://www.w3.org/2000/svg"><rect height="120" width="30" x="95" y="85"></rect><rect height="120" width="30" x="150" y="85"></rect></g>
        </svg>
      </div >
    );
  }
}

export default PlayPause;
