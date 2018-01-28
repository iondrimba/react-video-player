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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">1Welcome to React</h1>
        </header>
        <Video />
      </div>
    );
  }
}

export default App;
