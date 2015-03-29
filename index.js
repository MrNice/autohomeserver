var WebSocketServer = require('ws').Server;
var express = require('express');
var cors = require('cors');

var wss = new WebSocketServer({ port: 1337 });

var app = express();

app.listen(80);
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.post('/on', function(req, res, next) {
  wss.clients.forEach(function sendOn(client) {
    client.send('turnOn'); // Literally the method name bc javascript 
  });

  res.status(200).json({ status: 'OK' });
  next();
});

app.post('/off', function(req, res, next) {
  wss.clients.forEach(function sendOn(client) {
    client.send('turnOff'); // Literally the method name bc javascript 
  });
  
  res.status(200).json({ status: 'OK' });
  next();
});
