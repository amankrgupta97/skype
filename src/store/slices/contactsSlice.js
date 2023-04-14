import { contacts } from "../../static-data";
import { createSlice } from "@reduxjs/toolkit";
const initialState = contacts;

const contactsSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
});

export default contactsSlice.reducer;
