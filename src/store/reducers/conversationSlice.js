import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";

const initialState = {
  conversations: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(logout, (state) => {
      state.conversations = initialState.conversations;
    }),
  reducers: {
    getConversationSuccessful: (state, { payload }) => {
      state.conversations = payload;
    },
  },
});

export const { getConversationSuccessful } = conversationSlice.actions;

export default conversationSlice.reducer;
