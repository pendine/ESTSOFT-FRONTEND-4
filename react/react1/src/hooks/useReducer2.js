import React, {useReducer} from 'react';

// 캐릭터의 기본정보
const INITIAL_STATE = {
  health : 100,
  level : 1,
  items : [],
};

// 
const gameReducer = ( state, action ) => {

};

// 캐릭터가 할 수 있는 행동
const ACTIONS = {
  HEAL : '회복',
  DEMAGE : '피해',
  LEVEL_UP : '레벨업',
  GET_ITEM : '아이템획득',
};


function Character1(){
  return(
    <div>
      <h1>캐릭터 정보</h1>
      <p>hp : </p>
      <p>lv : </p>
      <p>item : </p>

      <button onClick={() => dispatch({type: ACTIONS.HEAL})}>포션 먹기</button>
      <button onClick={() => dispatch({type: ACTIONS.DEMAGE})}>공격 당하기</button>
      <button onClick={() => dispatch({type: ACTIONS.LEVEL_UP})}>레벨업</button>
    </div>

  );
}

export default Character1;