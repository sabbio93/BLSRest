

class MyTimer
{
  //started when created
  constructor(stopAfter,interval,action)
  {
    this.callBack=action;
    this.interval=interval;
    this.end=stopAfter;
    var timer=setInterval(this.callBack,this.interval);
    this.timeout=setTimeout((timer)=>{if(timer!==null){clearInterval(timer)}},this.end,timer)
    this.timer=timer;
  }

  stop()
  {
    clearInterval(this.timer);
    clearTimeout(this.timeout);
  }

  delete()
  {
    clearInterval(this.timer);
    clearTimeout(this.timeout);
  }

}

module.exports = MyTimer;
