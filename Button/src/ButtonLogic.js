

class ButtonLogic
{
  constructor(emitter)
  {
    this.button=emitter;
    this.on=this.on.bind(this);
    this.off=this.off.bind(this);
    this.blink=this.blink.bind(this);
    this.stop=this.stop.bind(this);
  }
  on()
  {
    this.button.push('on');
  }
  off()
  {
    this.button.push('off');
  }
  blink()
  {
    this.button.push('blink');
  }
  stop()
  {
    this.button.push('stop');
  }

}

export default ButtonLogic;
