const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
  });

app.set("port", process.env.PORT || 3000);


//Connexion port 300
var server = http.listen(3000, () => {
    console.log("server is running on port", server.address().port);
});