const express = require('express');
const https = require('https');
const WebSocket = require('ws');

const app = express();
const server = https.createServer(app);
const wss = new WebSocket.Server({ server });

// Express routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// WebSocket server
wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Handle incoming messages from the WebSocket client
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

const PORT = 2323;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
