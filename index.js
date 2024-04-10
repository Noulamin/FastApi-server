const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Event handler for when a client connects
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Event handler for when a message is received from a client
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
  });

  // Event handler for when a client disconnects
  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on port 8080');
