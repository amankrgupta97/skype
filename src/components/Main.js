import React from "react";
import "../components/Main.css";
import Empty from "../components/Empty";
import Chatwindow from "../components/Chatwindow";

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      return <Chatwindow activeUserId={activeUserId.user_id} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
