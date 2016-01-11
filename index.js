var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var PORT = 80;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});
