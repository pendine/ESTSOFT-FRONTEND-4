/*
요구사항
1. 액션 발생마다 몇초 걸렸는지 콘솔출력
2. 액션 타입과 함깨 시간 표시
3. 1초이상 걸리는 액션은 콘솔 출력시 경고 문구
*/
import { configureStore } from '@reduxjs/toolkit'

const timerMiddleware = store => next => action =>{
  const start = Date.now();
  
  // 액션 실행
  const result = next(action);
  
  // 소요 시간 계산
  const end = Date.now();
  const diff = end - start;
  
  // 결과 출력
  console.log(`액션 ${action.type} 실행 시간: ${diff}ms`);
  
  if (diff > 1000) {
    console.warn(`경고: ${action.type} 액션이 ${diff}ms로 오래 걸렸습니다!`);
  }
  
  return result;
}

const store = configureStore({
  reducer : rootReducer,
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware.concat(itmerMiddleware)
})
const createLoggingMiddleware = ( options = {}) =>{

  return store => next => action =>{

    // next(action) <-- 현재 액션을 다음 미들웨어나 리듀서에 전달하는 메서드
    const startTime = new Date().toISOString();
    const startTime2 = new Date();
    const prevState = store.getState();

    console.group(`Action: ${action.type} @ ${startTime}`);
    console.log('이전 상태:', prevState);
    console.log('액션:', action);

    const result = next(action);

    const nextState = store.getState();
    const endTime = new Date().toISOString();
    const endTime2 = new Date();
    let gap = endTime2 - startTime2  
    if( gap > 1000){
      console.log("경고 : 액션 동작 1초 이상 : gap : ", gap );
    }
    console.log("다음상태 : ", nextState);
    console.groupEnd();

    return result;
  }

}

export default createLoggingMiddleware;