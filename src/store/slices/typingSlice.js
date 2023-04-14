import { createSlice } from "@reduxjs/toolkit";

const typingSlice = createSlice({
  name: "typing",
  initialState: "",
  reducers: {
    setTyping(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setTyping } = typingSlice.actions;
export default typingSlice.reducer;
