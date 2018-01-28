import React, { Component } from 'react';
import Video from './components/video/video';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotSpots: []
    }
  }
  componentDidMount() {
    fetch('./data.json').then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ hotSpots: data });
    });
  }

  render() {
    return (
      <div className="App">
        <Video source={"/assets/video/video.mp4"} hotSpots={this.state.hotSpots} />
      </div>
    );
  }
}

export default App;
