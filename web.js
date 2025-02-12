const express = require("express");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const server = http.createServer(app);
const PORT = 8001;

app.use(cors());

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
});

app.use(
  "/safeText",
  (req, res, next) => {
    next();
  },
  createProxyMiddleware({
    target: "https://www.safetydata.go.kr",
    changeOrigin: true,
    pathRewrite: {
      "^/safeText": "",
    },
  })
);

app.use(express.static(path.join(__dirname, "my-react/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/my-react/build/index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");

  // 메시지 수신
  socket.on("chat message", (msg) => {
    const date = new Date().toISOString();
    io.emit("chat message", { userId: socket.id, message: msg, date });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
// web.js
