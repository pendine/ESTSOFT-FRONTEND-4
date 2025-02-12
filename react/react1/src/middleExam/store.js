import { configureStore } from "@redux/toolkit"
import logger from "../loggingMiddleware/loggingMiddleware"


// 미들웨어 만들때
// 1. 스토어에 등록
// 2. 등록된 미들웨어의 구현
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
      .concat() // 미들웨어 추가시
});