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
  const randomNickname = generateRandomKoreanName();

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

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomKoreanName() {
  const consonants = [
    "귀여운",
    "배고픈",
    "방황하는",
    "행복한",
    "슬픈",
    "지친",
    "용감한",
    "웃는",
    "깜찍한",
    "멋진",
  ];
  const vowels = [
    "도라지",
    "강아지",
    "베이글",
    "고양이",
    "물고기",
    "토끼",
    "햄버거",
    "치킨",
    "피자",
    "나무",
    "별",
    "산",
    "바다",
  ];

  const randomConsonant = getRandomElement(consonants);
  const randomVowel = getRandomElement(vowels);

  return randomConsonant + randomVowel;
}
// web.js
