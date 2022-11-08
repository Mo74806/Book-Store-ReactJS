import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: ["ss"],
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filter = action.payload;
    },
    readFilter: (state, action) => {
      state.filter = state.filter;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
