const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const PORT = 3000;

const server = http.createServer(app);
const io = socketIo(server);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('New client connected');

  
  socket.emit('message', 'Welcome to the real-time server!');

  
  socket.on('clientMessage', (msg) => {
    console.log(`Received message from client: ${msg}`);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

