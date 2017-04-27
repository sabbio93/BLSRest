import React, { Component } from 'react';

class ButtonViewBlinkStop extends Component
{

  render() {
      return (
        <div className="App">
          <button onClick={this.props.buttonlogic.blink}>blink</button>
          <button onClick={this.props.buttonlogic.stop}>stop</button>
        </div>
      );
    }
}

export default ButtonViewBlinkStop;
