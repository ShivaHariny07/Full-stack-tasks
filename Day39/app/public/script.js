const ws = new WebSocket("ws://localhost:8080");
let myUserId = null;

// Listen for messages from server
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  if (data.type === "welcome") {
    myUserId = data.userId;
    document.getElementById("userInfo").innerText = `✅ Connected | Your ID: ${myUserId}`;
  } else {
    displayMessage(data);
  }
};

// Display messages in chat box
function displayMessage(data) {
  const chatBox = document.getElementById("chat");
  const msg = document.createElement("div");

  const label = data.type === "private" ? "🔒 Private" : "👥 Group";
  msg.textContent = `${label} | User ${data.from}: ${data.message}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

// Send a group message
function sendGroupMessage() {
  const input = document.getElementById("message");
  const message = input.value.trim();

  if (message) {
    ws.send(JSON.stringify({ type: "group", message }));
    input.value = "";
  }
}

// Send a private message
function sendPrivateMessage() {
  const to = document.getElementById("privateId").value.trim();
  const message = document.getElementById("privateMessage").value.trim();

  if (to && message) {
    ws.send(JSON.stringify({
      type: "private",
      to: Number(to),
      message
    }));
    document.getElementById("privateMessage").value = "";
  }
}
