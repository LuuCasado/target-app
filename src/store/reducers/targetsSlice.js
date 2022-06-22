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
    getTargetsSuccessful: (state, { payload }) => {
      state.targets = payload;
    },
  },
});

export const { createSuccessful, getTopicsSuccessful, getTargetsSuccessful } =
  targetsSlice.actions;

export default targetsSlice.reducer;
