import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    isMapVisible: false,
  },
  reducers: {
    toggleMapVisibility: (state) => {
      state.isMapVisible = !state.isMapVisible;
    },
  },
});

export const { toggleMapVisibility } = layoutSlice.actions;

export default layoutSlice.reducer;
