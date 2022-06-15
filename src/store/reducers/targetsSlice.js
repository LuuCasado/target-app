import { createSlice } from "@reduxjs/toolkit";

export const targetsSlice = createSlice({
  name: "targets",
  initialState: {
    targets: [],
    topics: [],
  },
  reducers: {
    createSuccessful: (state, { payload }) => {
      state.targets = [...state.targets, payload];
    },
    getTopicsSuccessful: (state, { payload }) => {
      state.topics = payload;
    },
  },
});

export const { createSuccessful, getTopicsSuccessful } = targetsSlice.actions;

export default targetsSlice.reducer;
