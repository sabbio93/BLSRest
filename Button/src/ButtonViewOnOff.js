import React, { Component } from 'react';

class ButtonViewOnOff extends Component
{
  render() {
      return (
        <div className="App">
          <button onClick={this.props.buttonlogic.on}>on</button>
          <button onClick={this.props.buttonlogic.off}>off</button><br/>
        </div>
      );
    }
}

export default ButtonViewOnOff;
