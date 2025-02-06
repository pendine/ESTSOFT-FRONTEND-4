// Reducer 변형하기
import React, {useReducer} from 'react';


function reducer (state, action){
  return state + action;
}



function Quiz5(){
  const [number, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>현재 숫자: {number}</h2>
      <button onClick={() => dispatch(1)}>
        더하기 버튼
      </button>
      <button onClick={() => dispatch(-1)}>
        빼기 버튼
      </button>
    </div>
  );
}

export default Quiz5;