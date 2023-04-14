import React from "react";
import { useDispatch } from "react-redux";
import "./User.css";
import { setActiveUserId } from "../store/slices/activeUserSlice";

const User = ({ user }) => {
  const dispatch = useDispatch();
  const { name, profile_pic, status, user_id } = user;
  const userClick = (user_id) => {
    dispatch(setActiveUserId(user_id));
  };

  return (
    <div className="User" onClick={() => userClick({ user_id })}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
