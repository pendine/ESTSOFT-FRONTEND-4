import { configureStore } from "@reduxjs/toolkit";
import { createLoggingMiddleware } from './loggingMiddleware.js';
import postReducer from './Slice';

const store = configureStore({
  reducer: {
    posts : postReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      createLoggingMiddleware({
        actionTypes: ['posts/fetchPosts/fulfilled'], // 특정 액션만 로깅
        development: process.env.NODE_ENV === 'development'
      })
    )
});

export default store;