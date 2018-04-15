import React, { Component } from 'react';
import Video from './components/video';
import './common/styles.css';
import './app.css';

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
      <div className='app'>
        <Video source={'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'} hotSpots={this.state.hotSpots} />
      </div>
    );
  }
}

export default App;
