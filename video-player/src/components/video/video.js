import React, { Component } from 'react';
import { convertFormatedTimeToSeconds, percent } from '../../helpers/converter';
import History from '../../helpers/history';
import Seeker from '../seeker/seeker';
import HotSpot from '../hotspot/hotSpot';
import './video.css';

class Video extends Component {
  constructor(props) {
    super(props);

    this.history = new History();
    this.history.onChange(this.seekSpot.bind(this));

    this.state = {
      duarion: 0,
      currentPosition: 0,
    };

  }

  componentDidMount() {
    this.video.controls = false;

    this.video.addEventListener('timeupdate', () => {
      this.setState({ currentPosition: percent(this.video.currentTime, this.video.duration) });
    })

    this.video.addEventListener('loadedmetadata', () => {
      this.video.volume = .1;
      this.setState({ duration: this.video.duration });
    })

    this.btnPlay.addEventListener('click', () => {
      this.video.play();
    })

    this.btnPause.addEventListener('click', () => {
      this.video.pause();
    })
  }

  seekSpot(time) {
    this.seek(percent(convertFormatedTimeToSeconds(time), this.video.duration));
  }

  seek(percent) {
    this.video.currentTime = (percent * this.video.duration) / 100;
  }

  onHotSpotClick(spot, evt) {
    this.history.update(spot);
  }

  render() {
    return (
      <div className="player">
        <video ref={(video) => { this.video = video; }}>
          <source src={this.props.source} type="video/mp4" />
        </video>
        <Seeker onSeek={this.seek.bind(this)} currentPosition={this.state.currentPosition} >
          {
            this.props.hotSpots.map((spot, index) => {
              return <HotSpot onClick={this.onHotSpotClick.bind(this)} containerWidth={document.querySelector('.sliders').offsetWidth} spot={spot} duration={this.state.duration} key={index} />
            })
          }
        </Seeker>
        <button ref={(btnPlay) => { this.btnPlay = btnPlay }}>play</button>
        <button ref={(btnPause) => { this.btnPause = btnPause }}>pause</button>
      </div>
    );
  }
}

export default Video;
