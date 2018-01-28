import React, { Component } from 'react';
import Video from './components/video/video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Video source={"/assets/video/video.mp4"}/>
      </div>
    );
  }
}

export default App;
