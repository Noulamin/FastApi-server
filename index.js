const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);

// Create a WebSocket server instance by passing the HTTP server object
const wss = new WebSocket.Server({ server });

// Event handler for when a client connects
wss.on("connection", function connection(ws) {
  console.log("Client connected");

  // Event handler for when a message is received from a client
  ws.on("message", function incoming(message) {
    console.log("Received: %s", message);
  });

  // Event handler for when a client disconnects
  ws.on("close", function close() {
    console.log("Client disconnected");
  });
});

// Route for handling regular HTTP requests
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

const PORT = process.env.PORT || 4560;

server.listen(PORT, () => {
  console.log(`HTTP server and WebSocket server are running on port ${PORT}`);
});
