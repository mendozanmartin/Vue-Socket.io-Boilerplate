


var express = require('express')
  , http = require('http');
//make sure you keep this order
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var serveStatic = require('serve-static');

app.set('port', (process.env.PORT || 5000));

app.use(serveStatic(__dirname + "/dist"));


io.on('connection', (socket) => {

socket.on('desktopJoin', function(data) { //when desktop joins
  socket.join(data.idNumber);
  console.log("Desktop/TV has connected to room: " + data.idNumber);
});

socket.on('sendID', function(data) { //listens to mobile device and sends back number if room exists
      if (io.sockets.adapter.rooms[data.idNumber] == null) {
        console.log("this room does not exist");
      } else {
        socket.join(data.idNumber);
        console.log("You have joined room: " + data.idNumber);
        io.emit("sendID", data);
        var numberOfPlayers = (data.idNumber).toString() + 'numPlayers';
        io.emit(numberOfPlayers, data);
      }
    });

socket.on('disconnectionDetected', function(data) {
  console.log('Player from ' + data.roomID + ' has disconnected');
  var disconnectedRoom = (data.roomID).toString() + 'disconnected';
  io.emit(disconnectedRoom, data);
});

socket.on('directionControl', (data) => {
  var directionLounge = (data.loungeNumber).toString() + 'direction';
  io.emit(directionLounge, data);
});

socket.on('gameControls', (data) => {
  var gameLounge = (data.loungeNumber).toString() + 'game';
  io.emit(gameLounge, data);
});
});

server.listen(app.get('port'), function(){
  console.log('listening on *:5000');
});
