var express = require('express')
  , http = require('http');
//make sure you keep this order
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var serveStatic = require('serve-static');

app.set('port', (process.env.PORT || 5000));

app.use(serveStatic(__dirname + "/dist"));


server.listen(app.get('port'), function(){
  console.log('listening on *:5000');
});


io.on('connection', (socket) => {

socket.on('desktopJoin', function(data) { //when desktop joins
  socket.join(data.idNumber);
  console.log("Desktop/TV has connected to room: " + data.idNumber);
});

socket.on('disconnectionDetected', function(data) {
  console.log('Player from ' + data.roomID + ' has disconnected');
  if (data.roomID != null) {
    var disconnectedRoom = (data.roomID).toString() + 'disconnected';
    io.emit(disconnectedRoom, data);
  } else {
    console.log('no rooms yet');
  }
});
});


