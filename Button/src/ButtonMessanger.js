
const ipPort="http://10.103.65.177:6001";

module.exports.push=function sendBlink(msg)
{
  let url=ipPort+'/'+msg;
  /*
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false ); // false for synchronous request
  //TODO catch server error
  xmlHttp.send(null);
  */
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
