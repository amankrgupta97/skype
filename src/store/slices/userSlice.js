import { generateUser } from "../../static-data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = generateUser();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
