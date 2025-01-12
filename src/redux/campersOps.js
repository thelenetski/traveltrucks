import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/getCampers",
  async ({ limit, page, id }, thunkAPI) => {
    const state = thunkAPI.getState();
    const filters = state.filters.filters;
    try {
      const response = await axios.get(
        id !== undefined ? `${URL}/${id}` : URL,
        {
          params: { limit, page, ...filters },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
