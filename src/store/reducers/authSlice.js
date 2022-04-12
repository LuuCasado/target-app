import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    loginSuccessful: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    },
    logout: (state) => {
      state.user = {};
    },
  },
});

export const { loginSuccessful, logout } = authSlice.actions;

export default authSlice.reducer;
