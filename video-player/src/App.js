import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './video.css';
import './star.css';
import Video from './Video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Video />
      </div>
    );
  }
}

export default App;
