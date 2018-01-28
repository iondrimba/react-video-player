

import React, { Component } from 'react';
import './styles.css';

class ToolTip extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.animate) {

      //little trick to avoid setTimeout to display css animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (this.toolTip) {
            this.toolTip.style = `opacity:1;transform: rotate(0deg) translateY(-97%)`;
          }
        });
      });
    }
  }

  render() {
    return (
      <div ref={(toolTip) => { this.toolTip = toolTip; }} className='toolTip'>
        <img className='toolTip__bg' src={this.props.thumb} width={200} height={150} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ToolTip;
