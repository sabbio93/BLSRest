//import section

//LogicLed class Definition

var state={
  on:true,
  off:false
}

var myTimer = require('./MyTimer.js')
const TLIMIT=10000;
//currently the led state is mantained inside the "class" but in future can be
//implemented asking to real led what is it's state
class LogicLED
{
  constructor(Led)
  {
    this.timer=null;
    this.intState=state.off;
    this.realLed=Led;
    this.blink=this.blink.bind(this);
    this.switchState=this.switchState.bind(this);
  }

  getState()
  {
    return this.intState;
  }

  stateToString()
  {
    switch (this.getState()) {
      case true:
        return "on";
        break;
      case false:
          return "off";
        break;
      default:
        return "no state";
    }
  }

  on()
  {
    if(!this.getState())
    {
    this.intState=state.on;
    this.realLed.on();
    }
  }

  off()
  {
    if(this.getState())
    {
    this.intState=state.off;
    this.realLed.off();
    }
  }

  switchState()
  {
    if(this.getState())
    {
      this.off();
    }
    else {
      this.on();
        }

  }

  blink()
  {
    if(this.timer!==null)
    {
      this.timer.delete();
    }

    //change of the state every sec
    this.timer=new myTimer(TLIMIT,1000,this.switchState);
  }

  stopBlink()
  {
    if(this.timer!==null)
    {
      this.timer.stop();
    }
  }

}

module.exports = LogicLED;
