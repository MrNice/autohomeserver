var WebSocketServer = require('ws').Server;
var express = require('express');

var wss = new WebSocketServer({ port: 1337 });

var app = express();

app.use(express.static(__dirname + '/public'));
app.listen(80);

app.post('/on', function() {
  ws.clients.forEach(function sendOn(client) {
    client.send('turnOff'); // Literally the method name bc javascript 
  });
});

app.post('/off', function() {
  ws.clients.forEach(function sendOn(client) {
    client.send('turnOff'); // Literally the method name bc javascript 
  });
});
