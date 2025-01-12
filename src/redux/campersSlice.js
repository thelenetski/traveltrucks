import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';

const handlePending = state => {
  state.loading = { main: true, outlet: false };
};

const handleRejected = (state, action) => {
  state.loading = { main: false, outlet: false };
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: { main: false, outlet: false },
    error: null,
  },
  reducers: {
    resetCampers: (state) => {
      state.items = [];
    },
  },
  
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = { main: false, outlet: false };
        state.error = null;
      })
      .addCase(fetchCampers.rejected, handleRejected)
  },
});

export const { resetCampers } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
