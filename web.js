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
  const randomNickname = generateRandomNickname();

  // 메시지 수신
  socket.on("chat message", (msg) => {
    const date = new Date().toISOString();
    io.emit("chat message", {
      userId: socket.id,
      message: msg,
      date,
      nickname: randomNickname,
    });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});

// 랜덤 닉네임 생성
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomNickname() {
  const firstName = ["안전", "행복", "건강"];
  const randomLastName = () => Math.floor(Math.random() * 999).toString();
  const randomFirstName = getRandomElement(firstName);

  return randomFirstName + randomLastName();
}
// web.js
