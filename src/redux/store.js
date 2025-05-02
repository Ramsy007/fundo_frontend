import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import urlFlagReducer from "./slices/urlFlagSlice";
import lTrackerReducer from "./slices/lTracherSlice";
import userDataReducer from "./slices/userDataSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  url: urlFlagReducer,
  lTracker: lTrackerReducer,
  userData: userDataReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
