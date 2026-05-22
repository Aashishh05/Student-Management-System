import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slice.js"
export const store = configureStore({
  reducer: {
    auth:authReducer,
  },
});
