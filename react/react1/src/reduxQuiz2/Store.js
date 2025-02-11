import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slice.js";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
