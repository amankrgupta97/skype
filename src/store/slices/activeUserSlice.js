import { createSlice } from "@reduxjs/toolkit";

const activeUserSlice = createSlice({
  name: "activeUser",
  initialState: null,
  reducers: {
    setActiveUserId(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setActiveUserId } = activeUserSlice.actions;
export default activeUserSlice.reducer;
