import { createSlice } from "@reduxjs/toolkit";

import { logout } from "./authSlice";

const initialState = {
  targets: [],
  topics: [],
  editingTargetId: null,
};

export const targetsSlice = createSlice({
  name: "targets",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(logout, (state) => {
      state.targets = initialState.targets;
      state.topics = initialState.topics;
      state.editingTargetId = initialState.editingTargetId;
    }),
  reducers: {
    createSuccessful: (state, { payload, type }) => {
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
