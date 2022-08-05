import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    headers: {},
  },
  reducers: {
    loginSuccessful: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    },

    setHeaders: (state, { payload }) => {
      state.headers = payload;
    },

    logout: (state) => {
      state.user = {};
      state.headers = {};
    },
  },
});

export const { loginSuccessful, logout, setHeaders } = authSlice.actions;

export default authSlice.reducer;
