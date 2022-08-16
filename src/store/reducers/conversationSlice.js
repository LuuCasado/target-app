import { createSlice } from "@reduxjs/toolkit";

import { removeDuplicated } from "utils/helpers";
import { logout } from "./authSlice";

const initialState = {
  conversations: [],
  messages: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(logout, (state) => {
      state.conversations = initialState.conversations;
      state.messages = initialState.messages;
    }),
  reducers: {
    getConversationSuccessful: (state, { payload }) => {
      state.conversations = payload;
    },
    getMessagesSuccessful: (state, { payload: { page, messages } }) => {
      if (page !== 1) {
        state.messages = [...state.messages, ...messages];
      } else {
        state.messages = messages;
      }
      state.messages = removeDuplicated(state.messages);
      state.messages.sort(
        (messageA, messageB) =>
          new Date(messageA.date) - new Date(messageB.date)
      );
    },
  },
});

export const { getConversationSuccessful, getMessagesSuccessful } =
  conversationSlice.actions;

export default conversationSlice.reducer;
