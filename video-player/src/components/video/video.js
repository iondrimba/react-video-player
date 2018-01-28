import React, { Component } from 'react';
import { convertFormatedTimeToSeconds, percent } from '../../helpers/converter';
import History from '../../helpers/history';
import Seeker from '../seeker/seeker';
import HotSpot from '../hotspot/hotSpot';
import PlayPause from '../playPause/playPause';
import './video.css';

class Video extends Component {
  constructor(props) {
    super(props);

    this.history = new History();
    this.history.onChange(this.seekSpot.bind(this));

    this.state = {
      duarion: 0,
      currentPosition: 0,
      playing: false,
    };

  }

  componentDidMount() {
    this.video.controls = false;

    this.video.addEventListener('timeupdate', () => {
      this.setState({ currentPosition: percent(this.video.currentTime, this.video.duration) });

      if (this.video.ended) {
        this.setState({ playing: false, currentPosition: 0 });
        this.history.update('/');
      }
    })

    this.video.addEventListener('loadedmetadata', () => {
      this.video.volume = .1;
      this.setState({ duration: this.video.duration });
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
      <div className="player">
        <div className="video-container">
          <video className="video" ref={(video) => { this.video = video; }}>
            <source src={this.props.source} type="video/mp4" />
          </video>
          <PlayPause onClick={this.onPlayPauseClick.bind(this)} playing={this.state.playing} />
        </div>
        <Seeker onSeek={this.seek.bind(this)} currentPosition={this.state.currentPosition} >
          {
            this.props.hotSpots.map((spot, index) => {
              return <HotSpot onClick={this.onHotSpotClick.bind(this)} containerWidth={document.querySelector('.sliders').offsetWidth} spot={spot} duration={this.state.duration} key={index} />
            })
          }
        </Seeker>
      </div>
    );
  }
}

export default Video;
