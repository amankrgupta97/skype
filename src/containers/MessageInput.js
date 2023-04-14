import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTyping } from "../store/slices/typingSlice";
import "../containers/MessageInput.css";
import { sendMessage } from "../store/slices/messageSlice";

const MessageInput = ({ value }) => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setTyping(e.target.value));
  };

  const activeUserId = useSelector((state) => state.activeUserId.user_id);
  const typing = useSelector((state) => state.typing);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!typing) {
      alert("can not send Empty text");
    } else {
      const data = {
        activeUserId,
        typing,
      };
      dispatch(sendMessage(data));
      dispatch(setTyping(""));
    }
  };
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleInput}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
