import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
  name: "conversation",
  initialState: {
    conversations: [],
  },
  reducers: {
    getConversationSuccessful: (state, { payload }) => {
      state.conversations = payload;
    },
  },
});

export const { getConversationSuccessful } = conversationSlice.actions;

export default conversationSlice.reducer;
