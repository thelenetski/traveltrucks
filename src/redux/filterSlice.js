import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: {}
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = {};
    },
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
