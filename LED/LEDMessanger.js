var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var path = require('path');
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var RealLed=require('./ReaLedConsole.js');
var LogicLed=require('./LogicLed.js');
LogicLED= new LogicLed(RealLed);

app.get('/', function (request, response) {
    response.status(200);
    response.send("Hi I'm a LED");
    response.end();
    });

app.get('/on', function (request, response) {
	response.status(200);
  LogicLED.on();
	response.send("ok");
  response.end();
    });

app.get('/off', function (request, response) {
    response.status(200);
    LogicLED.off();
    response.send("ok");
    response.end();
    });

app.get('/getState', function (request, response) {
    response.status(200);
    response.send(LogicLED.stateToString());
    response.end();
    });

app.get('/blink', function (request, response) {
    response.status(200);
    LogicLED.blink();
    response.send("ok");
    response.end();
    });

app.get('/stop', function (request, response) {
    response.status(200);
    LogicLED.stopBlink()
    response.send("ok");
    response.end();
    });

app.listen(appEnv.port);
console.log('server partito porta:'+appEnv.port);
