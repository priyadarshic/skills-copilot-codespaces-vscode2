// Create web server
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/comment', function(req, res) {
  res.sendFile(__dirname + '/comment.html');
});
app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
// Create WebSocket server
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 40510});
wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    wss.clients.forEach(function(client) {
      client.send(message);
    });
  });
});