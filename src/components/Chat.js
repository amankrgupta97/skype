import React from "react";
import "./Chat.css";
import { useRef, useEffect } from "react";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

const Chats = ({ message }) => {
  const chatref = useRef();
  const scrollToBottom = () => {
    chatref.current.scrollTop = chatref.current.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
  }, [message]);
  return (
    <div className="Chats" ref={chatref}>
      {message.map((message) => (
        <Chat message={message} key={message.number} />
      ))}
    </div>
  );
};

export default Chats;
