import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8001", {
  transports: ["websocket", "polling"],
});

export default function LiveChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    socket.emit("chat message", input);
    setInput("");
  };

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMsg) => [...prevMsg, msg]);
    });

    return () => socket.off("chat message");
  }, []);

  return (
    <>
      <h2>실시간 대화</h2>
      <div className="liveChat-wrap">
        <ul>
          {messages.map((msg, idx) => (
            <li key={idx}>{msg}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>전송</button>
      </div>
    </>
  );
}
