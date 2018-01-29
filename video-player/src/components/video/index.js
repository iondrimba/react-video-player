import React, { Component } from 'react';
import { convertFormatedTimeToSeconds, percent } from '../../helpers/converter';
import History from '../../helpers/history';
import Seeker from '../seeker';
import HotSpotList from '../hotspot';
import PlayPause from '../playPause';
import seeker from '../seeker';
import './styles.css';

class Video extends Component {
  constructor(props) {
    super(props);

    this.history = new History();
    this.history.onChange(this.seekSpot.bind(this));

    this.state = {
      duration: 0,
      currentPosition: 0,
      playing: false,
      seeking: false,
      width: 0
    };
  }

  componentDidMount() {
    this.video.controls = false;

    this.video.addEventListener('timeupdate', this.onTimeUpdate.bind(this));

    this.video.addEventListener('loadedmetadata', this.onLoadMetadata.bind(this));

    this.video.addEventListener('seeked', this.onSeeked.bind(this));

    window.addEventListener('resize', this.onResize.bind(this));

    this.onResize();
  }

  onResize() {
    this.setState({ width: document.querySelector('.seeker').offsetWidth });
  }

  onLoadMetadata() {
    this.setState({ duration: this.video.duration });
  }

  onTimeUpdate() {
    this.setState({ currentPosition: percent(this.video.currentTime, this.video.duration)});

    if (this.video.ended) {
      this.setState({ playing: false, currentPosition: 0 });
      this.history.update('/');
    }
  }

  onSeeked() {
    const interval = setTimeout(() => {
      this.setState({ playing: true });
      this.video.play();

      this.seeking.classList.remove('seeking-overlay--show');

      clearTimeout(interval);
    }, 300);
  }

  seekSpot(time) {
    this.seek(percent(convertFormatedTimeToSeconds(time), this.video.duration));
  }

  seek(percent) {
    this.setState({ playing: false });
    this.video.pause();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.seeking.classList.add('seeking-overlay--show');
      });
    });

    const interval = setTimeout(() => {
      this.video.currentTime = (percent * this.video.duration) / 100;
      clearTimeout(interval);
    }, 100);

  }

  onHotSpotClick(spot, evt) {
    this.history.update(spot);
  }

  onPlayPauseClick(playing) {
    this.setState({ playing: playing });

    if (this.state.playing) {
      this.video.pause();
    } else {
      this.video.play();
    }
  }

  render() {
    return (
      <div className='player'>
        <div className='video-container'>
          <video className='video' ref={(video) => { this.video = video; }}>
            <source src={this.props.source} type='video/mp4' />
          </video>
          <div ref={(seeking) => { this.seeking = seeking; }} className='seeking-overlay'></div>
          <PlayPause onClick={this.onPlayPauseClick.bind(this)} playing={this.state.playing} />
        </div>
        <Seeker onSeek={this.seek.bind(this)} duration={this.state.duration} currentPosition={this.state.currentPosition} />
        <HotSpotList hotSpots={this.props.hotSpots} width={this.state.width} onClick={this.onHotSpotClick.bind(this)} duration={this.state.duration} />
      </div>
    );
  }
}

export default Video;
