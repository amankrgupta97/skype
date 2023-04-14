import { getMessages } from "../../static-data";
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = getMessages(10);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    sendMessage(state, action) {
      const userId = action.payload.activeUserId;
      const msg = action.payload.typing;
      const allMsg = state[userId];
      const number = +_.keys(allMsg).pop() + 1;
      console.log(userId);
      console.log(msg);
      state = {
        ...state,
        [userId]: {
          ...allMsg,
          [number]: {
            number,
            text: msg,
            is_user_msg: true,
          },
        },
      };
      return state;
    },
  },
});

export const { sendMessage } = messageSlice.actions;
export default messageSlice.reducer;
