import { createSlice } from "@reduxjs/toolkit";

export const targetsSlice = createSlice({
  name: "targets",
  initialState: {
    targets: [],
    topics: [],
    editingTargetId: null,
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
    editTarget: (state, { payload }) => {
      state.editingTargetId = payload;
    },
    deleteTarget: (state, { payload }) => {
      state.targets = state.targets.filter(({ id }) => id !== payload);
    },
  },
});

export const {
  createSuccessful,
  getTopicsSuccessful,
  getTargetsSuccessful,
  editTarget,
  deleteTarget,
} = targetsSlice.actions;

export default targetsSlice.reducer;
