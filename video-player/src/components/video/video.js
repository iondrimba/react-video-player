import React, { Component } from 'react';
import './video.css';
import Star from '../star/star';
import History from '../../helpers/history';
import Seeker from '../seeker/seekr';
import seekr from '../seeker/seekr';

class Video extends Component {
  constructor(props) {
    super(props);

    this.history = new History();
    this.history.onChange(this.seekSpot.bind(this));

    this.state = {
      duarion: 0,
      currentTime: 0,
      spot: '0:00',
      currentPosition: 0,
      hotSpots: [
        {
          time: '0:10',
          description: 'AAAAAAA AAAAAAAA',
          thumb: '/assets/images/thumb0.jpg',
          name: 'AAAA'
        },
        {
          time: '1:20',
          description: 'BBBBBBB BBBBBBBBBB',
          thumb: '/assets/images/thumb1.jpg',
          name: 'BBBBB'

        },
        {
          time: '3:20',
          description: 'CCCCCCCC CCCCCCCCC',
          thumb: '/assets/images/thumb2.jpg',
          name: 'CCCCCC'

        },
        {
          time: '4:20',
          description: 'DDDDDDDD DDDDDDDD',
          thumb: '/assets/images/thumb3.jpg',
          name: 'DDDDD'
        }
      ]
    };

  }

  componentDidMount() {
    this.video.controls = false;
    //this.video.play();

    this.video.addEventListener('timeupdate', () => {
      const percent = (this.video.currentTime / this.video.duration) * 100;
      this.setState({ currentPosition: percent });
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
    const seconds = this.convertFormatedTimeToSeconds(time);
    const percent = (seconds / this.video.duration) * 100;
    this.seek(percent);
  }

  seek(percent) {
    this.video.currentTime = (percent * this.video.duration) / 100;
  }

  getSpotPosition(time, duration) {
    const seconds = this.convertFormatedTimeToSeconds(time);
    const percent = (seconds / duration) * 100;
    const posX = (percent * 360) / 100;
    return { transform: `translateX(${posX}px)` };
  }
  convertFormatedTimeToSeconds(time) {
    return time.split(':').reduce((acc, time) => (60 * acc) + +time);
  }
  onClick(index, evt) {
    this.history.update(this.state.hotSpots[index]);
  }
  render() {
    return (
      <div className="player">
        <video ref={(video) => { this.video = video; }}>
          <source src={this.props.source} type="video/mp4" />
        </video>
        <Seeker onSeek={this.seek.bind(this)} currentPosition={this.state.currentPosition} />
        <button ref={(btnPlay) => { this.btnPlay = btnPlay }}>play</button>
        <button ref={(btnPause) => { this.btnPause = btnPause }}>pause</button>
      </div>
    );
  }
}

export default Video;
