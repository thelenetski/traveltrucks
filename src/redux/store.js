import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filterReducer } from "./filterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const favPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(favPersistConfig, campersReducer),
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
