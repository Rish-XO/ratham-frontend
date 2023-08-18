import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../bot/config.js";
import MessageParser from "../bot/MessageParser.jsx";
import ActionProvider from "../bot/ActionProvider.jsx";
import "./ChatPage.css";
import { useSelector } from "react-redux";

function ChatPage() {
  const name = useSelector((state) => state.chatHandler.name);
  console.log(name, " from chatpage");
  return (
    <div className="chat-container">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatPage;
