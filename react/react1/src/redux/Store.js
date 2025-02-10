import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';

// 어플리케이션이 시작되면 스토어가 생성
// configureStor가 Redux 스토어를 생성해줌
export const store = configureStore({

  reducer:{
    counter: counterReducer,
  }

  // configureStore 는 자동으로 
  // Redux DevTools Extension 연결과
  // reduxt-thunk 미들웨어를 추가해줌
  // 또한 개발 환경에서의 오류 체크
})