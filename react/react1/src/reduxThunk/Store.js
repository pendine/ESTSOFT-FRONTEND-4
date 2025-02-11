import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slice.js";
import {createLogger} from "react-logger";

const logger = createLogger();

const middleware = [];

if(process.env.NODE_ENV ==='development'){
  middleware.push(logger);
}

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  /*
  액션이 dispatch되기전 상태 추적
  dispatch된 액션 정보 출력
  액션 처리 후 새로운 상태 출력
  개발 환경에서만 사용 하도록 설정 가능
  */
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
