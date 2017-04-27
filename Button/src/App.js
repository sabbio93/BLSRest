import React, { Component } from 'react';
import ButtonViewOnOff from './ButtonViewOnOff.js';
import ButtonLogic from './ButtonLogic.js';
import ButtonMessanger from './ButtonMessanger.js';
import ButtonViewBlinkStop from './ButtonViewBlinkStop.js';

class App extends Component
{
  constructor(props)
  {
    super(props);
    var messanger= ButtonMessanger;
    var btlogic= new ButtonLogic(messanger);
    this.buttonlogic=btlogic;
  }

  render()
  {
        return (
        <div>
          <h1>BLS system</h1>
          <ButtonViewOnOff buttonlogic={this.buttonlogic}/>
          <ButtonViewBlinkStop buttonlogic={this.buttonlogic}/>
        </div>
      );
  }
}

export default App;
