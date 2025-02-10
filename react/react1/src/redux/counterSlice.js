// 
import { createSlice } from "@reduxjs/toolkit";

// 초기에는 initialState를 통해
// 초기 상태 설정이 진행
const counterSlice = createSlice({

  // name 속성 : 슬라이스 이름을 정의할때 사용
  name : 'counter',
  // 슬라이스의 초기값 설정
  initialState: {
    value:0,
  },
  // 상태 변경함수들의 정의
  // 이 파일은 counter.js의 dispatch로부터
  // 이벤트 실행을 받아옴
  reducers:{
    increment: (state) =>{
      state.value +=1;
    },
    decrement: (state) =>{
      state.value -=1;
    },
    // action파라미터는 dispatch된 액션 객체 자체를 의미.
    incrementByAmount: (state, action)=>{
      state.value += action.payload;
    }
  },

})

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// createSlice가 생성한 리듀서를 내보냄
// store 설정시 사용
export default counterSlice.reducer;