import React, { Component } from 'react';
import './styles.css';

class ToolTip extends Component {
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
      <div ref={(toolTip) => { this.toolTip = toolTip; }} className='tool-tip'>
        <img className='tool-tip__image' src={this.props.thumb} width={200} height={150} />
        <p className='tool-tip__description'>{this.props.description}</p>
      </div>
    );
  }
}

export default ToolTip;
