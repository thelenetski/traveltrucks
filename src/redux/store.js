import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campersSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
  },
});
