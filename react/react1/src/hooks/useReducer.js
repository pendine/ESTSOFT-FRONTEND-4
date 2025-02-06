import React, {useReducer} from 'react';

// 쉽게 생각하면 복잡한 상태관리시 사용

function Machine(){

  // state : 현재 상태값 저장 (변수 number의 값을 들고있음)
  // action : 수행 중 동작 (dispatch에서 보낸 파라미터값을 가지고있음)
  //  -> dispatch를 통해 전달받은 함수
  const reducer = (state, action) =>{
    switch(action){
      case '더하기':
        return state +1;
      case '빼기':
        return state -1;
      case '초기화':
        return 0;
      default:
        return state;
          
    }
  }

  // useReducer 훅을 사용하여 상태관리 준비
  // number : 현재 상태값을 저장할 변수
  // dispatch : 상태 변경을 위한 함수
  // reducer : 위에 정의한 함수 , 변화를 감지하는 코드
  const [number, dispatch] = useReducer(reducer, 0);


  return (
    <div>
      <h2>현재 숫자: {number}</h2>
      <button onClick={() => dispatch('더하기')}>
        더하기 버튼
      </button>
      <button onClick={() => dispatch('빼기')}>
        빼기 버튼
      </button>
      <button onClick={() => dispatch('초기화')}>
        초기화 버튼
      </button>
    </div>
  );
}

export default Machine;