module.exports.off=function pyAcc()
{
var util = require('util'),
    exec = require('child_process').exec,
    child;

child = exec('./PyLed/python acc.py', // command line argument directly in string
  function (error, stdout, stderr) {      // one easy function to capture data/errors
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
   		 }
	});
}

module.exports.on=function pySpegni()
{
var util = require('util'),
    exec = require('child_process').exec,
    child;

child = exec('./PyLed/python spegni.py', // command line argument directly in string
  function (error, stdout, stderr) {      // one easy function to capture data/errors
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
   		 }
	});
}
