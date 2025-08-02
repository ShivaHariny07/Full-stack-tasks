import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Enable CORS to allow client connections from different origins
app.use(cors());

// SSE route
app.get("/events", (req, res) => {
  // Set headers to establish SSE stream
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  });

  // Notify client of successful connection
  res.write("data: ✅ Connected to SSE stream\n\n");

  // Send timestamp every 2 seconds
  const sendTime = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    res.write(`data: ⏰ Server time: ${currentTime}\n\n`);
  }, 2000);

  // When the client closes the connection
  req.on("close", () => {
    clearInterval(sendTime);
    console.log("🚫 Client disconnected from SSE");
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ SSE server is running at http://localhost:${PORT}`);
});
