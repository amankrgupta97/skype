import { configureStore } from "@reduxjs/toolkit";
import activeUserSlice from "./slices/activeUserSlice";

import contactsSlice from "./slices/contactsSlice";
import messageSlice from "./slices/messageSlice";
import typingSlice from "./slices/typingSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    user: userSlice,
    activeUserId: activeUserSlice,
    message: messageSlice,
    typing: typingSlice,
  },
});

export default store;
