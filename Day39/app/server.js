import express from "express";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const connectedClients = new Map(); // userId → WebSocket

// When a client connects
wss.on("connection", (socket) => {
  const userId = Date.now(); // Use timestamp as a simple unique ID
  connectedClients.set(userId, socket);

  console.log(`✅ Client connected: ${userId}`);

  // Send welcome message with user ID
  socket.send(JSON.stringify({ type: "welcome", userId }));

  // Listen for incoming messages
  socket.on("message", (rawMessage) => {
    let data;

    try {
      data = JSON.parse(rawMessage);
    } catch (err) {
      console.error("Invalid JSON received:", rawMessage);
      return;
    }

    const { type, message, to } = data;

    if (type === "group") {
      // Broadcast message to all clients
      connectedClients.forEach((clientSocket, clientId) => {
        clientSocket.send(JSON.stringify({
          type: "group",
          from: userId,
          message
        }));
      });
    } else if (type === "private" && to) {
      // Send private message
      const recipientSocket = connectedClients.get(to);
      if (recipientSocket) {
        recipientSocket.send(JSON.stringify({
          type: "private",
          from: userId,
          message
        }));
      }
    }
  });

  // Handle client disconnect
  socket.on("close", () => {
    connectedClients.delete(userId);
    console.log(`❌ Client disconnected: ${userId}`);
  });
});

// Serve static frontend from /public
app.use(express.static("public"));

// Start server
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`🚀 WebSocket server running at http://localhost:${PORT}`);
});
