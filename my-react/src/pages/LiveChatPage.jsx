import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { formatDate } from "../components/util/date";

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

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    socket.on("chat message", (data) => {
      setMessages((prevMsg) => [...prevMsg, data]);
    });

    return () => socket.off("chat message");
  }, []);

  return (
    <>
      <h2>실시간 대화</h2>
      <div className="liveChat-wrap">
        {messages.map((data, idx) => (
          <div className="chatWrap" key={idx}>
            {data.userId === socket.id ? (
              <>
                <span className="date myDate">{formatDate(data.date)}</span>
                <div className="myChat chatBalloon">{data.message}</div>
              </>
            ) : (
              <>
                <div className="yourChat chatBalloon">{data.message}</div>
                <span className="date yourDate">{formatDate(data.date)}</span>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="chatInputWrap">
        <input
          className="chatInput"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
          placeholder="메시지 입력 후 엔터를 눌러주세요."
        />
        <button className="sendChatBtn" onClick={sendMessage}>
          전송
        </button>
      </div>
    </>
  );
}
