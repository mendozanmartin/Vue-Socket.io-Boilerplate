// var express = require('express')
//   , http = require('http');
// //make sure you keep this order
// var app = express();
// var server = http.createServer(app);
// var io = require('socket.io').listen(server);
//
// app.set('port', (process.env.PORT || 5000));
//
//
//
// io.on('connection', (socket) => {
//   console.log(socket.id)
//   socket.on('SEND_MESSAGE', function(data) {
//       io.emit('MESSAGE', data);
//       console.log(data.message);
// });
// });
//
// // Initialize our websocket server on port 5000
// server.listen(app.get('port'), function(){
//   console.log('listening on *:5000');
//
// });

// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
