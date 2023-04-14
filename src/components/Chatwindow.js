import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Chat from "../components/Chat";
import MessageInput from "../containers/MessageInput";
import _ from "lodash";
import "./Chatwindow.css";

const ChatWindow = ({ activeUserId }) => {
  const contacts = useSelector((state) => state.contacts);
  const activeUser = contacts[activeUserId];
  const msg = useSelector((state) => state.message);
  const activeMsg = msg[activeUserId];
  const typing = useSelector((state) => state.typing);
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chat message={_.values(activeMsg)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;
