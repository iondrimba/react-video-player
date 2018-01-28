
import React, { Component } from 'react';
import HotSpot from './hotSpot';
import './styles.css';

class HotSpotList extends Component {
  render() {
    return (
      <div className='hotspot-container'>
        {
          this.props.hotSpots.map((spot, index) => {
            return <HotSpot onClick={this.props.onClick.bind(this)} containerWidth={this.props.width} spot={spot} duration={this.props.duration} key={index} />
          })
        }
      </div>
    );
  }
}

export default HotSpotList;
