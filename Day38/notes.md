# Real-Time Communication Protocols

## WebSocket

### Definition

WebSocket is a full-duplex communication protocol that allows a persistent connection between a client and a server over a single TCP connection. It enables real-time, two-way communication without the need for repeated HTTP requests.

### How It Works

1. The client sends a request to the server to upgrade the HTTP connection to WebSocket.  
2. The server accepts and establishes a persistent connection.  
3. Both client and server can send messages at any time until the connection is closed.

### Use Cases

- Chat applications (e.g., WhatsApp Web, Slack)  
- Online gaming  
- Live financial data updates  
- Real-time dashboards

### Advantages

- Real-time bidirectional communication  
- Reduces overhead (no repeated HTTP requests)  
- Better performance for live updates

---

## Server-Sent Events (SSE)

### Definition

Server-Sent Events (SSE) is a unidirectional communication protocol where the server can push updates to the client over an HTTP connection. Unlike WebSocket, only the server can send data; the client listens for updates.

### How It Works

1. Client sends an HTTP request to subscribe to server updates.  
2. Server keeps the connection open and pushes messages (in `text/event-stream` format).  
3. Client receives updates in real-time until the connection is closed.

### Use Cases

- Live news feeds  
- Stock price updates  
- Notifications from servers  
- Social media live updates

### Advantages

- Simple to implement (built on HTTP)  
- Lightweight compared to WebSocket for server-to-client updates  
- Automatic reconnection support

---

## Webhooks

### Definition

Webhooks are event-driven callbacks that allow one system to notify another system when a specific event occurs. Unlike WebSocket or SSE, Webhooks are not a persistent connection; instead, the server sends an HTTP POST request to a predefined URL.

### How It Works

1. The client registers a callback URL with the server.  
2. When an event occurs, the server sends an HTTP POST request with event data to the callback URL.  
3. The client processes the received data.

### Use Cases

- Payment gateway notifications (e.g., Stripe, PayPal)  
- GitHub or GitLab repository events  
- CI/CD pipeline triggers  
- CRM and ERP system integrations

### Advantages

- Event-driven, no constant polling required  
- Easy to integrate with external systems  
- Efficient for asynchronous updates
