import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

const handlePending = (state) => {
  state.loading = { main: true, outlet: false };
};

const handleRejected = (state, action) => {
  state.loading = { main: false, outlet: false };
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    favorites: [],
    loading: { main: false, outlet: false },
    error: null,
  },
  reducers: {
    resetCampers: (state) => {
      state.items = [];
    },
    addFav: (state, action) => {
      const existingIndex = state.favorites.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = { main: false, outlet: false };
        state.error = null;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { resetCampers, addFav } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
